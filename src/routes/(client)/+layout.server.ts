import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = (event) => {
    console.log("Loading",event.locals.student?.name);
    return {
        student: event.locals.student
    }
}