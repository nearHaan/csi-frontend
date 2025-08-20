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
        const year = data.get('year');
        const phone_number = data.get('phone_number');
        const password = data.get('password');
        const confirm_password = data.get('confirm_password');
        const error = validateRegistration(name, email, department, batch, year, phone_number, password, confirm_password);
        if (error) {
            return fail(400, { message: error });
        }
    }
} satisfies Actions;

export const load: PageServerLoad = async () => {
    const deptList = await getDepts();
    return {
        deptList
    };
}