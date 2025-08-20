import { verifyToken } from "$lib/api/auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async({ event, resolve }) => {
    const token = event.cookies.get('accessToken');

    if(token){
        try{
            const res = await verifyToken(token);
            console.log("Server Data: ",res.user);
            if(res.ok){
                event.locals.user = res.user;
            } else {
                event.locals.user = null;
            }
        } catch {
            event.locals.user = null;
        }
    } else {
        event.locals.user = null;
    }
    return resolve(event);
}