import { API_BASE_URL } from "$env/static/private";

export async function registerUser(name: string, email: string, department_id: string, batch: string, year: number, phone_number: string, password: string, confirm_password: string) {
    const res = await fetch(`${API_BASE_URL}/api/auth/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, department_id, batch, year, phone_number, password })
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        console.log(error);
        throw new Error(error.meesage);
    }
    console.log(res.json());
    return await res.json();
}

export async function loginUser(email: string, password: string) {
    const res = await fetch(`${API_BASE_URL}/api/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        console.log(error);
        throw new Error(error.meesage);
    }

    return await res.json();
}