import { fail, type Actions } from "@sveltejs/kit";

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if(typeof email !== 'string' || typeof password !== 'string' || !email || !password){
            //
        } else {
            return fail(400, { message: "Please provide your email and password"})
        }

        console.log('Email:', email);
        console.log('Password:', password);
        return { success: true };
    }
} satisfies Actions;