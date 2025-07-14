import type ISocialMedia from "../types/ISocialMedia.ts";
import linkedinIcon from "../assets/svg/linkedin.svg"

export default async function getSocialMedia(locale: string){
    return [
        {
            name: "Linkedin", url: "https://www.linkedin.com/in/juanzuniga79/", category: "blogging",
            banner: "from-sky-200 to-sky-300 dark:from-blue-700 dark:to-blue-800", icon: linkedinIcon.src
        },
        {
            name: "Instagram", url: "", category: "blogging",
            banner: "from-rose-200 to-amber-300", icon: linkedinIcon.src
        },
        {
            name: "Linkedin", url: "https://www.linkedin.com/in/juanzuniga79/", category: "blogging",
            banner: "from-sky-200 to-sky-300 dark:from-blue-700 dark:to-blue-800", icon: linkedinIcon.src
        },
    ] as ISocialMedia[];
}