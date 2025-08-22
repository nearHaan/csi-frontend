import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get('accessToken');
    console.log('check login: ',token);
    if(!token){
        event.locals.user = false;
    }
    event.locals.user = true;
    return await resolve(event);
};