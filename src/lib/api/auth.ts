import { API_BASE_URL } from "$env/static/private";

export async function registerUser(name: string, email: string, department: string, batch: string, year: number, phone_number: string, password: string, confirm_password: string) {
    const res = await fetch(`${API_BASE_URL}/api/auth/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, department, batch, year, phone_number, password, confirm_password })
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        const errorText = Object.values(error).join(' ');
        throw new Error(errorText || 'Registration failed');
    }

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
        const errorText = Object.values(error).join(' ');
        throw new Error(errorText || 'Login failed');
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