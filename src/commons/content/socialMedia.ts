import type ISocialMedia from "../types/ISocialMedia.ts";
import linkedinIcon from "../assets/svg/linkedin.svg"
import instagramIcon from "../assets/svg/instagram.svg"
import twitterIcon from "../assets/svg/twitter.svg"
import facebookIcon from "../assets/svg/facebook.svg"
import youtubeIcon from "../assets/svg/youtube.svg"
import blogIcon from "../assets/svg/blog.svg"

export default async function getSocialMedia(locale: string){
    return [
        {
            name: "Instagram", url: "", category: "blogging",
            banner: "from-rose-400 to-amber-200", icon: instagramIcon
        },
        {
            name: "Linkedin", url: "https://www.linkedin.com/in/juanzuniga79/", category: "blogging",
            banner: "from-sky-200 to-sky-400 dark:from-blue-700 dark:to-blue-800", icon: linkedinIcon
        },
        {
            name: "Twitter", url: "https://www.linkedin.com/in/juanzuniga79/", category: "blogging",
            banner: "from-sky-200 to-sky-400 dark:from-blue-700 dark:to-blue-800", icon: twitterIcon
        },
        {
            name: "Facebook", url: "", category: "blogging",
            banner: "from-sky-200 to-sky-400 dark:from-blue-700 dark:to-blue-800", icon: facebookIcon
        },
        {
            name: "Youtube", url: "", category: "blogging",
            banner: "from-rose-200 to-rose-400", icon: youtubeIcon
        },
        {
            name: "Blog", url: "", category: "blogging",
            banner: "from-orange-200 to-amber-400", icon: blogIcon
        }
    ] as ISocialMedia[];
}