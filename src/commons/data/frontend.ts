import type ISkill from "../types/ISkill.ts";
import {blue, gray, indigo, orange, red, rusted} from "./colors.ts"
import Angular from "../assets/icons/tech/angular.astro"
import Astro from "../assets/icons/tech/astro.astro"
import Next from "../assets/icons/tech/next.astro"
import React from "../assets/icons/tech/react.astro"
import Scss from "../assets/icons/tech/scss.astro"
import Tailwind from "../assets/icons/tech/tailwind.astro"
import Blazor from "../assets/icons/tech/dotnet.astro"
import Go from "../assets/icons/tech/go.astro"
import Rust  from "../assets/icons/tech/rust.astro"
import Kotlin from "../assets/icons/tech/kotlin.astro"

export const angular: ISkill = {name: "angular", icon: Angular, years: 3, proficiency: 6, code: "fangular", color: red}
export const astro: ISkill = {name: "astro", icon: Astro, years: 3, proficiency: 7, code: "fastro", color: orange,
    relation: ["MDX", "zod", "markdown"]}
export const next: ISkill = {name: "next", icon: Next, years: 3, proficiency: 7, color: gray, code: "fnext",
    relation: ["typeORM", "prisma", "react"]}
export const react: ISkill = {name: "react", icon: React, years: 4, proficiency: 6, color: blue, code: "freact",
    relation: ["zustand", "redux"]}
export const scss: ISkill = {name: "scss", icon: Scss, years: 2, proficiency: 6, color: red, code: "fscss"}
export const tailwind: ISkill = {name: "tailwind", icon: Tailwind, years: 3, proficiency: 7, color: blue, code: "ftailwind"}
export const blazor: ISkill = {name: "blazor", icon: Blazor, years: 2, proficiency: 5, color: indigo, code: "fblazor",
    relation: ["asp.net core"]}
export const tauri: ISkill = {name: "tauri", icon: Rust, years: 1, proficiency: 4, color: rusted, code: "ftauri"}
export const wails: ISkill = {name: "wails", icon: Go, years: 1, proficiency: 3, color: blue, code: "fwails"}
export const native: ISkill = {name: "react native", icon: React, years: 2, proficiency: 6, color: blue, code: "fnative"}
export const android: ISkill = {name: "android studio", icon: Kotlin, years: 1, proficiency: 5, color: orange, code: "fandroid"}