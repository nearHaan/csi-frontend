import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, locals }) => {
    if(locals.student?.name){
        locals.student = null;
    }
    cookies.delete('access_token', { path: '/'});
    cookies.delete('refresh_token', { path: '/'});

    return redirect(307, '/login');
}