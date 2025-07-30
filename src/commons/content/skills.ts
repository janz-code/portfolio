import type {ICategory} from "../types/ISkill.ts";
import {python,rust,sql,kotlin,csharp,java,go,clang,typescript} from "../data/languages.ts"
import {angular, astro, blazor, css, html, markdown, next, react, scss, tailwind} from "../data/frontend.ts";
import {django, dotnet, fastapi, fiber, nest, rocket, spring} from "../data/backend.ts";
import {clean, event, hex, micro, onion} from "../data/architecture.ts";
import {aws, azure, docker, google, vercel} from "../data/tools.ts";
const getSkills = async (locale: string) => {
    const isDefault = locale === "en";
    return [
        {name: isDefault ? "languages":"lenguajes", code: "clang",
            skills: [python,rust,sql,kotlin,csharp,java,go,clang,typescript]},
        {name: "frontend", code: "cfront",
            skills: [angular, astro, css, html, markdown, next, react, scss, tailwind, blazor]},
        {name: "backend", code: "cback",
            skills: [dotnet, spring, fastapi, django, fiber, nest, rocket]},
        {name: isDefault ? "architecture" : "arquitectura", code: "carch",
            skills: [clean, onion, micro, event, hex]},
        {name: isDefault ? "others":"otros", code: "cothers", skills: [azure, aws, google, docker, vercel]}
    ] as ICategory[];
}

export default getSkills;