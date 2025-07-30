import type ISkill from "../types/ISkill.ts";
import {blue, emerald, gray, indigo, orange, rusted} from "./colors.ts";
import Clang from "../assets/icons/tech/clang.astro"
import CSharp from "../assets/icons/tech/csharp.astro"
import Java from "../assets/icons/tech/java.astro"
import Go from "../assets/icons/tech/go.astro"
import Kotlin from "../assets/icons/tech/kotlin.astro"
import Python from "../assets/icons/tech/python.astro"
import Rust from "../assets/icons/tech/rust.astro"
import SQL from "../assets/icons/tech/sql.astro"
import Typescript from "../assets/icons/tech/typescript.astro"

export const clang: ISkill = {name: "c/cpp", icon: Clang, color: blue, proficiency: 4, code: "lcpp", years: 2}
export const csharp: ISkill = {name: "csharp", icon: CSharp, color: indigo, proficiency: 7, code: "lcsharp", years: 4,
    relation: ["asp.net core", "ef core", "blazor", "maui"]}
export const java: ISkill = {name: "java", icon: Java, color: orange, proficiency: 7, code: "ljava", years: 4,
    relation: ["javaFX", "libGDX", "spring", "spring boot", "hibernate", "jpa", "sentry"]}
export const go: ISkill = {name: "go", icon: Go, color: blue, proficiency: 3, code: "lgo", years: 1,
    relation: ["gorm", "fiber"]}
export const kotlin: ISkill = {name: "kotlin", icon: Kotlin, color: orange, proficiency: 6, code: "lkotlin", years: 2,
    relation: ["tornadoFX", "spring boot", "libGDX"]}
export const python: ISkill = {name: "python", icon: Python, color: emerald, proficiency: 5, code: "lpython", years: 6,
    relation: ["fastAPI", "django", "tortoiseORM"]}
export const rust: ISkill = {name: "rust", icon: Rust, color: rusted, proficiency: 2, code: "lrust", years: 1,
    relation: ["rocket"]}
export const sql: ISkill = {name: "SQL", icon: SQL, color: gray, proficiency: 7, code: "lsql", years: 4,
    relation: ["postgresql", "sql server"]}
export const typescript: ISkill = {name: "typescript", icon: Typescript, color: blue, proficiency: 8, code: "ltypescript",
    years: 5, relation: ["react", "angular", "astro", "next", "nest"]}