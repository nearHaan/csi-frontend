import type { ExecomList } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    // const response = await fetch('');
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