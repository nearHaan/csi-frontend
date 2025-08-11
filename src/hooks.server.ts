import { verifyToken } from "$lib/api/auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async({ event, resolve }) => {
    const token = event.cookies.get('access_token');

    if(token){
        try{
            const res = await verifyToken(token);
            console.log("Server Data: ",res.student);
            if(res.student){
                event.locals.student = res.student;
            } else {
                event.locals.student = null;
            }
        } catch {
            event.locals.student = null;
        }
    } else {
        event.locals.student = null;
    }
    return resolve(event);
}