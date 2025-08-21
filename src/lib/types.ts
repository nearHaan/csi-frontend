export type Student = {
    id: number;
    user: {
        id: number;
        email: string;
        is_staff: boolean;
        is_superuser: boolean;
        date_joined: string;
    };
    name: string;
    phone_number: string;
    department: string;
    batch: string;
    year: number;
};

export type User = {
    user_id: string;
}

export type UserDataRow = {
    status: boolean;
    id: number;
    name: string;
    email: string;
    phone_number: string;
    department: string;
    batch: string;
    year: number;
    role: string;
};

export type Event = {
    id: number;
    name: string;
    description: string;
    image: string;
    venue: string;
    reg_start_time: string;
    reg_end_time: string;
    event_start_time: string;
    event_end_time: string;
    fee_amount: number;
    status: boolean;
    max_registrations: number;
    whatsapp_link: string;
    food: boolean;
    min_team_size: number;
    max_team_size: number;
}

export type ExecomMember = {
    name: string;
    year: number;
    academic_year: number;
    batch: string;
    role: string;
    upload_image: string;
    social_link: string;
}

export type ExecomList = Record<string, ExecomMember[]>;

// let execomList = {
//     "techTeam": [
//         {
//             name: "Ram",
//             pos: "Chair"
//         },
//         {
//             name: "Joy",
//             pos: "VC"
//         },
//     ],
//     "design-team": [
//         {
//             name: "Tim",
//             pos: "Chair"
//         },
//         {
//             name: "Joy",
//             pos: "VC"
//         },
//     ],
// };