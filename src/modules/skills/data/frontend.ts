import type ISkill from "../types/ISkill.ts";
import react from "../assets/icons/react.svg"
import next from "../assets/icons/next.svg"
import astro from "../assets/icons/astro.svg"

const frontend: ISkill[] = [
    {
        name: "React", experience: 4, lastProject: "current", learning: 5, level: 8, projects: 8, iconSrc: react.src,
        usage: ["Frontend", "Mobile"],
        related: ["Redux", "Tailwind", "Zustand", "Axios", "Shad/cn"],
        certifications: []
    },
    {
        name: "Next", experience: 4, lastProject: "current", learning: 4, level: 7, projects: 6, iconSrc: next.src,
        usage: ["Frontend", "FullStack", "PWA"],
        related: ["Redux", "Tailwind", "Zustand", "Axios", "Shad/cn"],
        certifications: []
    },
    {
        name: "Astro", experience: 2, lastProject: "current", learning: 2, level: 7, projects: 5, iconSrc: astro.src,
        usage: ["Frontend"],
        related: ["Nano Store", "React", "Shad/cn", "Tailwind"],
        certifications: []
    }
]

export default frontend;