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

export type UserDataRow = {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    department: string;
    batch: string;
    year: number;
};

export type Event = {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    location: string;
    fees: number;
    image: string;
}

export type ExecomMember = {
    id: number;
    name: string;
    position: string;
    social_link: string;
    profile_link: string;
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