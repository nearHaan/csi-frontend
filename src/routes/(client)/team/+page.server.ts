import { getExecomData } from "$lib/server/api/execom";
import type { ExecomList } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {
    const execomList = await getExecomData(2025) as ExecomList;
    
    return ({
        execom_list: execomList
    });
}