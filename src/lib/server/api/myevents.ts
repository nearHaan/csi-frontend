import { API_BASE_URL } from "$env/static/private";
import type { EventList } from "$lib/types";

export async function getMyEvents(token: string): Promise<EventList> {
    const res = await fetch(`${API_BASE_URL}/api/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' , 'Authorization':`Bearer ${token.trim()}`},
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        console.log(error);
        throw new Error(error.message);
    }
    return await res.json();
} 