import type ISkill from "../types/ISkill.ts";
import {blue, emerald, indigo, red} from "./colors.ts"
import Dotnet from "../assets/icons/tech/dotnet.astro"
import FastApi from "../assets/icons/tech/fastapi.astro"
import Django from "../assets/icons/tech/django.astro"
import Go from "../assets/icons/tech/go.astro"
import Nest from "../assets/icons/tech/nest.astro"
import Rust from "../assets/icons/tech/rust.astro"
import Spring from "../assets/icons/tech/spring.astro"

export const spring: ISkill = {name: "spring boot", code: "bspring", icon: Spring, color: emerald, proficiency: 7,
    years: 4, relation: ["java", "kotlin", "hibernate", "spring cloud", "jpa", "rabbitMQ"]}
export const dotnet: ISkill = {name: "asp.net core", code: "dotnet", icon: Dotnet, color: indigo, proficiency: 8,
    years: 4, relation: ["ef core", "aspire", "csharp"]}
export const fiber: ISkill = {name: "fiber", code: "bfiber", icon: Go, color: blue, proficiency: 4, years: 1,
    relation: ["go", "gORM"]}
export const gin: ISkill = {name: "gin", code: "bgin", icon: Go, color: blue, proficiency: 3, years: 1,
    relation: ["go", "gORM"]}
export const nest: ISkill = {name: "nest", code: "bnest", icon: Nest, color: red, proficiency: 8, years: 4,
    relation: ["typescript", "node", "prisma", "typeorm"]}
export const rocket: ISkill = {name: "rocket", code: "brocket", icon: Rust, color: red, proficiency: 2, years: 1,
    relation: ["rust"]}