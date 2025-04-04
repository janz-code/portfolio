import type ISkill from "../types/ISkill.ts";
import typescript from "../assets/icons/typescript.svg"

const programming: ISkill[] = [
    {
        name: "Typescript", experience: 4, lastProject: "current", learning: 5,
        preference: 7, usage: ["Backend", "Frontend", "Mobile", "Desktop"],
        level: 8, projects: 10, iconSrc: typescript.src,
        certifications: ["prueba"],
        related: ["React", "Next", "Nest", "Astro", "React Native", "Angular"]
    },
]

export default programming;