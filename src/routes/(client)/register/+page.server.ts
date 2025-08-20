import { registerUser } from "$lib/api/auth";
import { validateRegistration } from "$lib/utils/validation";
import { fail, type Actions } from "@sveltejs/kit";
import { getDepts } from "$lib/api/dept";
import type { PageServerLoad } from "./$types";

export const actions = {
    register: async ({ locals, cookies, request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const department = data.get('department') as string;
        const batch = data.get('batch');
        const year = 2025;//parseInt(data.get('year') as string); correct this**
        const phone_number = data.get('phone_number');
        const password = data.get('password');
        const confirm_password = data.get('confirm_password');
        const error = validateRegistration(name, email, department, batch, year, phone_number, password, confirm_password);
        if (error) {
            return fail(400, { message: error });
        }

        try {
            const { accessToken, refreshToken, user } = await registerUser(name as string, email as string, department as string, batch as string, year as unknown as number, phone_number as string, password as string, confirm_password as string);

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

            console.log("Access token: ", accessToken);
            console.log("Student: ", user);

            return { success: true, user };
        } catch (err) {
            return fail(401, { message: (err as Error).message });
        }
    }
} satisfies Actions;

export const load: PageServerLoad = async () => {
    const deptList = await getDepts();
    return {
        deptList
    };
}