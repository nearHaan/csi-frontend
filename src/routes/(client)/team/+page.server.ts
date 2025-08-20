import { execomData } from "$lib/api/execom";
import type { ExecomList } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const response = execomData(2025);
    // const execom_list: ExecomList = await response.json();
    const execom_list: ExecomList = {
        'Admin Team': [
            {
                id: 1,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                profile_link: ''
            },
            {
                id: 2,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                profile_link: ''
            },
            {
                id: 3,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                profile_link: ''
            },
            {
                id: 4,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                profile_link: ''
            }
        ],
        'Tech Team': [
            {
                id: 1,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                profile_link: ''
            },
            {
                id: 2,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                profile_link: ''
            },
            {
                id: 3,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                profile_link: ''
            },
            {
                id: 4,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                profile_link: ''
            }
        ],
    };
    return {
        execom_list
    };
}