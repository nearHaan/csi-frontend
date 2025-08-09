export function validateLogin(email: unknown, password: unknown) {
	if (typeof email !== 'string' || typeof password !== 'string') {
		return 'Invalid form data';
	}
	if (!email || !password) {
		return 'Please provide your email and password';
	}
	return null;
}