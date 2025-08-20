import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = (event) => {
    console.log("Loading",event.locals.user?.user_id);
    return {
        user: event.locals.user
    }
}