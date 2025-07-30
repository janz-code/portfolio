import type ISkill from "../types/ISkill.ts";
import {blue, gray, indigo, orange, red} from "./colors.ts"
import Angular from "../assets/icons/tech/angular.astro"
import Astro from "../assets/icons/tech/astro.astro"
import Css from "../assets/icons/tech/css.astro"
import Html from "../assets/icons/tech/html.astro"
import Markdown from "../assets/icons/tech/markdown.astro"
import Next from "../assets/icons/tech/next.astro"
import React from "../assets/icons/tech/react.astro"
import Scss from "../assets/icons/tech/scss.astro"
import Tailwind from "../assets/icons/tech/tailwind.astro"
import Blazor from "../assets/icons/tech/dotnet.astro"

export const angular: ISkill = {name: "angular", icon: Angular, years: 3, proficiency: 6, code: "fangular", color: red,
    relation: ["axios"]}
export const astro: ISkill = {name: "astro", icon: Astro, years: 3, proficiency: 7, code: "fastro", color: orange,
    relation: ["fetch"]}
export const css: ISkill = {name: "css", icon: Css, years: 4, proficiency: 6, color: blue, code: "fcss"}
export const html: ISkill = {name: "html", icon: Html, years: 4, proficiency: 7, color: orange, code: "fhtml"}
export const markdown: ISkill = {name: "markdown", icon: Markdown, years: 2, proficiency: 6, color: gray, code: "fmarkdown"}
export const next: ISkill = {name: "next", icon: Next, years: 3, proficiency: 7, color: gray, code: "fnext",
    relation: ["typeORM", "prisma", "axios", "react", "zustand"]}
export const react: ISkill = {name: "react", icon: React, years: 4, proficiency: 6, color: blue, code: "freact",
    relation: ["axios", "zustand", "redux"]}
export const scss: ISkill = {name: "scss", icon: Scss, years: 2, proficiency: 6, color: red, code: "fscss"}
export const tailwind: ISkill = {name: "tailwind", icon: Tailwind, years: 3, proficiency: 7, color: blue, code: "ftailwind"}
export const blazor: ISkill = {name: "blazor", icon: Blazor, years: 2, proficiency: 5, color: indigo, code: "fblazor",
    relation: ["asp.net core"]}