import { getExecomData } from "$lib/api/execom";
import type { ExecomList } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {
    const execom_list = await getExecomData(2025) as ExecomList;
    return ({
        execom_list
    });
}