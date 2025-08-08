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