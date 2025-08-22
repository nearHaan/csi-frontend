import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ locals }) => {
    const isUserLoggedIn = locals.user;
    return ({
        isUserLoggedIn: isUserLoggedIn,
    });
}