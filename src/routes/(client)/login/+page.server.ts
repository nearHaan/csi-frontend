import { loginUser } from "$lib/api/auth";
import { validateLogin } from "$lib/utils/validation";
import { fail, type Actions } from "@sveltejs/kit";

export const actions = {
    login: async ({ locals ,cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        const error = validateLogin(email, password);
        if(error){
            return fail(400, {message: error});
        }

        try{
            const { accessToken, refreshToken, user } = await loginUser(email as string, password as string);

            cookies.set('accessToken', accessToken, {
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 24
            });

            cookies.set('refreshToken', refreshToken, {
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 24
            });
            locals.user = user;
            console.log("Access token: ",accessToken);
            console.log("Student: ",user);

            return { success: true, user};
        } catch (err) {
            return fail(401, { message: (err as Error).message});
        }
    }
} satisfies Actions;