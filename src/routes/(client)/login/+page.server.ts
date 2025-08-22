import { loginUser } from "$lib/server/api/auth";
import { validateLogin } from "$lib/utils/validation";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        const error = validateLogin(email, password);
        if(error){
            return fail(400, {message: error});
        }

        try {
            const { accessToken, refreshToken } = await loginUser(email as string, password as string);
            cookies.set('accessToken', accessToken, {
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 15,
            });
            cookies.set('refreshToken', refreshToken, {
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 24 * 7,
            });

            return {sucess: true};
        } catch (err){
            console.log((err as Error).message);
            return fail(400, {message: (err as Error).message});
        }
    }
} satisfies Actions;