import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ locals }) => {
    const isUserLoggedIn = locals.user;
    console.log('checking on layout server: ',isUserLoggedIn === true);
    return ({
        isUserLoggedIn: isUserLoggedIn,
    });
}