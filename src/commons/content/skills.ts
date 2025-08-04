import type {ICategory} from "../types/ISkill.ts";
import {sql, kotlin, csharp, java, go, typescript, rust, clang} from "../data/languages.ts"
import {android, angular, astro, blazor, native, next, react, scss, tailwind, tauri, wails} from "../data/frontend.ts";
import {dotnet, fiber, gin, nest, rocket, spring} from "../data/backend.ts";
import {clean, event, hex, micro, onion} from "../data/architecture.ts";
import {aws, azure, docker, google, vercel} from "../data/tools.ts";
const getSkills = async (locale: string) => {
    const isDefault = locale === "en";
    return [
        {name: isDefault ? "languages":"lenguajes", code: "clang",
            skills: [sql,kotlin,csharp,java,go,typescript, rust, clang]},
        {name: "frontend", code: "cfront",
            skills: [angular, astro, next, react, scss, tailwind, blazor, tauri, wails, native, android]},
        {name: "backend", code: "cback",
            skills: [dotnet, spring, fiber, nest, rocket, gin]},
        {name: isDefault ? "architecture" : "arquitectura", code: "carch",
            skills: [clean, onion, micro, event, hex]},
        {name: isDefault ? "others":"otros", code: "cothers", skills: [azure, aws, google, docker, vercel]}
    ] as ICategory[];
}

export default getSkills;