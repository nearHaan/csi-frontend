import { getMyEvents } from "$lib/server/api/myevents";
import type { EventList } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ cookies }) => {
    const token = cookies.get('accessToken');
    if(!token){
        return({
            myevents: <EventList><unknown>[]
        });
    }
    return({
        myevents: getMyEvents(token),
    });
}