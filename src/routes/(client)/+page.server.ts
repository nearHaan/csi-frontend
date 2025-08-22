import { getMyEvents } from "$lib/server/api/myevents";
import type { EventList } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const token = cookies.get('accessToken');
    if (!token) {
        return ({
            myevents: Promise.resolve({ events: [] }),
        });
    }
    return ({
        myevents: getMyEvents(token),
    });
}