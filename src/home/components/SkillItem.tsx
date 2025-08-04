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
            <h4 className="capitalize text-3xl font-cascadia font-semibold">{category.name}</h4>
            <ul className={`px-3 py-1 grid gap-x-1 gap-y-3 list-none ${active ? "h-fit" : "h-[400px]"}
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