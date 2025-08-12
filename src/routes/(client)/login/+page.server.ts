import { loginUser } from "$lib/api/auth";
import { APIError } from "$lib/errors.ts/APIError";
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
            const { access_token, refresh_token, student } = await loginUser(email as string, password as string);

            cookies.set('access_token', access_token, {
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 24
            });

            cookies.set('refresh_token', refresh_token, {
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 24
            });

            console.log("Access token: ",access_token);
            console.log("Student: ",student);

            return { success: true, student};
        } catch (err) {
            if(err instanceof APIError) {
                return fail(401, { message: (err as APIError).message, errorfield: (err as APIError).errorfield});
            } else {
                return fail(401, { message: (err as APIError).message});
            }
        }
    }
} satisfies Actions;