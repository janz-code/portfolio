import type ISkill from "../types/ISkill.ts";
import {blue, gray, orange} from "./colors.ts"
import Vercel from "../assets/icons/tech/vercel.astro"
import Google from "../assets/icons/tech/google.astro"
import Azure from "../assets/icons/tech/azure.astro"
import Aws from "../assets/icons/tech/aws.astro"
import Docker from "../assets/icons/tech/docker.astro"

export const vercel: ISkill = {name: "vercel", code: "tvercel", color: gray, icon: Vercel, years: 3, proficiency: 6}
export const google: ISkill = {name: "google cloud", code: "tgoogle", color: orange, icon: Google, years: 1,
    proficiency: 4}
export const azure: ISkill = {name: "azure", code: "tazure", color: blue, icon: Azure, years: 3, proficiency: 6}
export const aws: ISkill = {name: "aws", code: "taws", color: orange, icon: Aws, years: 2, proficiency: 5}
export const docker: ISkill = {name: "docker", code: "tdocker", color: blue, icon: Docker, years: 4, proficiency: 8}