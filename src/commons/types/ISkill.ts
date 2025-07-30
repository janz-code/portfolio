import type IColor from "./IColor.ts";

export default interface ISkill {
    color: IColor,
    name: string,
    code: string,
    icon: Function,
    proficiency: number // 0 < x < 10
    years: number
    relation?: string[]
}

export interface ICategory{
    name: string,
    code: string,
    skills: ISkill[]
}

export interface IStack{
    name: string,
    description: string,
    type: string,
}