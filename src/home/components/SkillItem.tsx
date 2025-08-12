import type {ICategory} from "../../commons/types/ISkill.ts";
import {useState} from "react";

interface Props{
    category: ICategory
    locale: string
    children: React.ReactNode
    items: number
}
const getContent = (locale: string, status: boolean) => {
    if(status) return locale === "en" ? "see less" : "ver menos";
    return locale === "en" ? "see more" : "ver mas";
}
export default function CategoryContainer({category, children, locale, items}:Props){
    const [active, setActive] = useState<boolean>(false)
    return (
        <li className="border-2 border-light-border px-4 py-2 rounded-2xl flex flex-col gap-y-3 h-fit">
            <h4 className="capitalize text-xl 2xl:text-3xl font-cascadia font-semibold">{category.name}</h4>
            <ul className={`2xl:px-3 px-1.5 2xl:py-1 py-0.5 grid 2xl:gap-y-3 lg:gap-y-1.5 list-none 
                ${active ? "h-fit" : "h-[350px]"}
                overflow-y-hidden transition-all duration-500 ease-in-out onResizeFit`}>
                {children}
            </ul>
            {items > 5 && (
                <button onClick={()=> setActive(!active)}
                        className="w-full bg-light-shadow h-6 font-cascadia font-light rounded-md flex
                        hover:bg-light-hover-shadow items-center justify-center cursor-pointer outline-none">
                    {getContent(locale, active)}
                </button>
            )}
        </li>
    )
}