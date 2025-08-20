import { verifyToken } from "$lib/api/auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async({ event, resolve }) => {
    const token = event.cookies.get('accessToken');

    if(token){
        try{
            const res = await verifyToken(token);
            console.log("Server Data: ", res);
            if(res.ok){
                event.locals.user = res.user;
            } else {
                event.locals.user = null;
                // Clear invalid token
                event.cookies.delete('accessToken', { path: '/' });
                event.cookies.delete('refreshToken', { path: '/' });
            }
        } catch (error) {
            console.error('Token verification failed:', error);
            event.locals.user = null;
            // Clear invalid tokens
            event.cookies.delete('accessToken', { path: '/' });
            event.cookies.delete('refreshToken', { path: '/' });
        }
    } else {
        event.locals.user = null;
    }
    return resolve(event);
}