import { API_BASE_URL } from "$env/static/private";

export async function loginUser(email: string, password: string) {
    const res = await fetch(`${API_BASE_URL}/api/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        console.log(error);
        throw new Error(error.meesage || 'Login failed');
    }

    return await res.json();
}

export async function verifyToken(token: string) {
    const res = await fetch(`${API_BASE_URL}/api/token/verify/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        console.log(error);
        throw new Error(error.meesage || 'Verification failed');
    }

    return await res.json();
}