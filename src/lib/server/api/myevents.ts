import { API_BASE_URL } from "$env/static/private";
import type { EventList } from "$lib/types";

export async function getMyEvents(token: string): Promise<EventList> {
    const res = await fetch(`${API_BASE_URL}/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' , 'Authorization':`Bearer ${token}`},
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        console.log(error);
        throw new Error(error.meesage);
    }
    return await res.json();
} 