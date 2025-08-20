import { API_BASE_URL } from "$env/static/private";

export async function execomYears() {
    const res = await fetch(`${API_BASE_URL}/api/execom-years/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        console.log(error);
        throw new Error(error.meesage);
    }

    return await res.json();
}

export async function execomData(year: number) {
    const res = await fetch(`${API_BASE_URL}/api/execom/${year}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        console.log(error);
        throw new Error(error.meesage);
    }

    return await res.json();
}