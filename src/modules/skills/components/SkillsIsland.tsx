import SkillsFilters from "./SkillsFilters.tsx";
import type ISkill from "../types/ISkill.ts";
import {useState} from "react";
import programming from "../data/programming.ts";
import type ISkillSystem from "../types/ISkillSystem.ts";
import Star from "./Star.tsx"
import Calendar from "../assets/sys/Calendar.tsx";
// @ts-ignore
import Achievement from "../assets/sys/Achievement.tsx";
import ProjectsIcon from "../assets/sys/Projects.tsx";
import Books from "../assets/sys/Books.tsx";

interface Props{
    data: ISkillSystem
}

export default function SkillsIsland({data}: Props) {

    const [items, setItems] = useState<ISkill[]>(programming);

    const handleActive = (key: number) => {
        if(key === 0) setItems(programming);
    }

    return(
        <div className="w-full flex flex-col items-center py-10 gap-10">
            <ul className="flex items-center justify-center gap-x-2 w-full">
                <SkillsFilters onChange={handleActive} />
            </ul>
            <article className="w-full h-fit font-poppins">
                <ul className="w-full grid grid-cols-4 gap-2 p-5 items-stretch">
                    {items.map((item, index) => (
                        <li className="w-full h-full border-[1px] border-neutral-200 bg-white rounded-2xl p-5 gap-y-2 flex
                            flex-col">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-start gap-x-2">
                                    <img src={item.iconSrc} alt="" width={24} height={24} />
                                    <h4 className="font-semibold">{item.name}</h4>
                                </div>
                                <figure className={`px-2 rounded-xl text-white
                                    ${item.level <=2 ? "bg-cyan-300" : item.level <= 4 ? "bg-cyan-600" : 
                                    item.level <= 6 ? "bg-blue-300" : item.level <= 8 ? "bg-blue-600" : 
                                        "bg-indigo-300"}`}>
                                    <span className="text-sm font-semibold italic">
                                        {item.level > 8 ? data.expert : item.level > 6 ? data.advanced : ''}
                                    </span>
                                </figure>
                            </div>
                            <div className="flex items-center gap-x-3 text-sm">
                                {data.frequency} <Star value={item.preference}/>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-2 font-light text-sm max-w-full">
                                <div className="w-full flex items-center gap-x-2">
                                    <figure className="text-neutral-500 w-5 h-5">
                                        <Achievement/>
                                    </figure>
                                    {data.experience} : {item.experience} {data.years}
                                </div>
                                <div className="flex items-center gap-x-2 w-full text-nowrap overflow-ellipsis">
                                    <figure className="text-neutral-500 min-w-5 min-h-5">
                                        <Calendar/>
                                    </figure>
                                    {data.last} : {item.lastProject === "current" ? data.current : item.lastProject}
                                </div>
                                <div className="flex items-center gap-x-2 w-full">
                                    <figure className="w-5 h-5 text-neutral-500">
                                        <ProjectsIcon/>
                                    </figure>
                                    {data.projects} : {item.projects}
                                </div>
                                <div className="flex items-center gap-x-2 w-full">
                                    <figure className="w-6 h-6 text-neutral-600">
                                        <Books/>
                                    </figure>
                                    {data.learning} : {item.learning} {data.years}
                                </div>
                            </div>
                            <blockquote className="text-sm font-light py-1 border-l-2 px-2 border-l-blue-500
                                rounded-b-md gap-x-2 flex items-center">
                                {item.usage.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))}
                            </blockquote>
                            <ul className="flex items-center justify-start gap-2 w-full font-light text-sm flex-wrap">
                                {data.related} :
                                {item.related.map((item, index) => (
                                    <span className="px-3 rounded-full border-[1px] border-neutral-400" key={index}>{item}</span>
                                ))}
                            </ul>
                            <ul className="flex items-center gap-x-2 w-full font-light text-sm">
                                {data.certifications} :
                                {item.certifications.map((item, index) => (
                                    <span key={index} className="px-3 border-[1px]
                                        border-neutral-400 rounded-full font-serif capitalize">
                                        {item}
                                    </span>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    )
}