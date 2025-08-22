import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, locals }) => {
    if(locals.user){
        locals.user = false;
    }
    console.log('token: ',cookies.get('accessToken'));
    cookies.delete('accessToken', { path: '/'});
    cookies.delete('refreshToken', { path: '/'});
    console.log('token: ',cookies.get('accessToken'));

    //should reload home page after redirect
    return redirect(307, '/');
}