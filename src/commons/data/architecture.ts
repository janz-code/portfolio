import type ISkill from "../types/ISkill.ts";
import {blue, emerald, gray, rusted} from "./colors.ts"
import Clean from "../assets/icons/tech/clean.astro"
import Hex from "../assets/icons/tech/hexagon.astro"
import Micro from "../assets/icons/tech/microservices.astro"
import Onion from "../assets/icons/tech/onion.astro"
import Event from "../assets/icons/tech/signal.astro"

export const clean: ISkill = {name: "clean", code: "aclean", color: gray, icon: Clean, proficiency: 7,
    years: 3}
export const hex: ISkill = {name: "hexagonal", code: "ahex", color: emerald, icon: Hex, proficiency: 6,
    years: 3}
export const micro: ISkill = {name: "microservices", code: "amicro", color: blue, icon: Micro, proficiency: 7,
    years: 2}
export const onion: ISkill = {name: "Onion", code: "aonion", icon: Onion, color: rusted, proficiency: 5,
    years: 1}
export const event: ISkill = {name: "event driven", code: "aevent", icon: Event, color: blue, proficiency: 6, years: 2}