import { loginUser } from "$lib/api/auth";
import { validateRegistration } from "$lib/utils/validation";
import { fail, type Actions } from "@sveltejs/kit";

export const actions = {
    login: async ({ locals ,cookies, request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const department = data.get('department');
        const batch = data.get('batch');
        const year = data.get('year');
        const phone_number = data.get('phone_number');
        const password = data.get('password');
        const confirm_password = data.get('confirm_password');

        const error = validateRegistration(name, email, department, batch, year, phone_number, password, confirm_password);
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
            return fail(401, { message: (err as Error).message})
        }
    }
} satisfies Actions;