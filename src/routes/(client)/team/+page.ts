import type { ExecomList } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    // const response = execomData(2025);
    // const execom_list: ExecomList = await response.json();
    const execom_list: ExecomList = {
        'Admin Team': [
            {
                id: 1,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                upload_image: '',
                year: 2027,
                academic_year: 2025,
                batch: 'B',
            },
            {
                id: 2,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                upload_image: '',
                year: 2027,
                academic_year: 2025,
                batch: 'B',
            },
            {
                id: 3,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                upload_image: '',
                year: 2027,
                academic_year: 2025,
                batch: 'B',
            },
            {
                id: 4,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                upload_image: '',
                year: 2027,
                academic_year: 2025,
                batch: 'B',
            },
        ],
        'Tech Team': [
            {
                id: 1,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                upload_image: '',
                year: 2027,
                academic_year: 2025,
                batch: 'B',
            },
            {
                id: 2,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                upload_image: '',
                year: 2027,
                academic_year: 2025,
                batch: 'B',
            },
            {
                id: 3,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                upload_image: '',
                year: 2027,
                academic_year: 2025,
                batch: 'B',
            },
            {
                id: 4,
                name: 'Raihan Rasheed',
                position: 'Chair',
                social_link: '',
                upload_image: '',
                year: 2027,
                academic_year: 2025,
                batch: 'B',
            },
        ],
    };
    return {
        execom_list
    };
}