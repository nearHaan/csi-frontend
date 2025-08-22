import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, locals }) => {
    locals.user = null;
    cookies.delete('accessToken', { httpOnly: false, path: '/' });
    cookies.delete('refreshToken', { httpOnly: false, path: '/' });

    throw redirect(302, '/');
}