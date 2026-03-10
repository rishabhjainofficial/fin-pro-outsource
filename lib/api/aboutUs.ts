export async function getAboutUsData(): Promise<{ id: number; title: string; role: string; src: string }[]> {
    const teams = [
        {
            id: 1,
            title: "CA Parth Shah",
            role: "Founder",
            src: "/images/teams/parth_shah.webp"
        },
        {
            id: 2,
            title: "CMA Arpit Patel",
            role: "Director",
            src: "/images/teams/arpit_patel.webp"
        },
        {
            id: 3,
            title: "Dhwani Shah",
            role: "Director",
            src: "/images/teams/dhwani_shah.webp"
        },
        {
            id: 4,
            title: "Vishva Patel",
            role: "President",
            src: "/images/teams/vishva_patel.webp"
        },
        {
            id: 5,
            title: "Khushali Shah",
            role: "Senior Accountant",
            src: "/images/teams/khushali_shah.webp"
        },
        {
            id: 6,
            title: "Krutin Shah",
            role: "Senior Accountant",
            src: "/images/teams/krutin_shah.webp"
        },
        {
            id: 7,
            title: "Sanjay Shah",
            role: "Senior Tax Manager",
            src: "/images/teams/sanjay_shah.webp"
        },
        {
            id: 8,
            title: "Rishabh Jain",
            role: "Technical & Web Partner",
            src: "/images/teams/rishabh_jain.webp"
        },
    ];

    return teams;
}