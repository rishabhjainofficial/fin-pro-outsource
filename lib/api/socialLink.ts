import { serviceIconMap } from "@/lib/data/icons";

export function getSocialLinks(): { icon: React.ReactNode; name: string; href: string }[] {
    const socialLinks = [
        { icon: serviceIconMap.Linkedin, name: "Linkedin", href: "#linkedin" },
        { icon: serviceIconMap.Twitter, name: "Twitter", href: "#twitter" },
        { icon: serviceIconMap.Facebook, name: "Facebook", href: "#facebook" },
        { icon: serviceIconMap.Instagram, name: "Instagram", href: "#instagram" },
    ];

    return socialLinks;
}