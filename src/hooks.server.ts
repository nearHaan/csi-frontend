import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get('accessToken');
    if(!token){
        event.locals.user = false;
    } else {
        event.locals.user = true;
    }
    return await resolve(event);
};