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
    }
} satisfies Actions;