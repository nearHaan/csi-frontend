import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, locals }) => {
    if(locals.student?.name){
        locals.student = null;
    }
    cookies.delete('access_token', { path: '/'});
    cookies.delete('refresh_token', { path: '/'});

    //should reload home page after redirect
    return redirect(307, '/');
}