import { getMyEvents } from "$lib/server/api/myevents";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const token = cookies.get('accessToken');
    if(!token){
        return({
            myevents: []
        });
    }
    return({
        myevents: getMyEvents(token),
    });
}