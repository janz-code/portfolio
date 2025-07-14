import type ISocialMedia from "../../commons/types/ISocialMedia.ts";
import {useState} from "react";
import ClockIcon from "../../commons/assets/icons/system/Clock.tsx";

interface Props{
    data: ISocialMedia[]
}
export default function HeroSocialCards({data}: Props) {
    const [active, setActive] = useState<number>(0);
    return(
        <div className="relative w-full h-fit py-10 flex justify-center items-center">
            {data.map((item:ISocialMedia, i) => (
                <Card index={i} item={item} active={i===active}/>
            ))}
        </div>
    )
}

const getPosition = (active: boolean, index: number) => {
    const stack = index <= 2 ? 1 : 2;
    if(active) return ""
    if(index%2===0) return `right-[10px] rotate-[20deg] top-16`
    else return `left-[${20*stack}px] -rotate-[20deg] top-16`
}
interface CardProps{
    index: number;
    item: ISocialMedia;
    active: boolean
}
function Card({index, item, active}: CardProps){
    return(
        <div className={`${index==0 ? "block" : "absolute"} ${getPosition(active, index)} flex flex-col border-[1px] 
            border-light-border bg-light-bg
            rounded-2xl overflow-hidden w-2/5 h-fit gap-y-2 font-sweet p-2`} style={{zIndex: 40-index}}>
            <div className={`relative w-full h-20 bg-gradient-to-br ${item.banner} rounded-lg`}>
                <figure className="p-2 rounded-full bg-white absolute -bottom-4 left-4">
                    <img src={item.icon} alt="social media icon" width={18} height={18} />
                </figure>
            </div>
            <div className="flex flex-col gap-y-2 py-2">
                <div className="flex flex-col">
                    <h4 className="font-cascadia font-bold text-xl">{item.name}</h4>
                    <span className="text-sm capitalize">{item.category}</span>
                </div>
                <div className="text-xs font-light flex items-center justify-center pt-1">
                    <a href={item.url} target="_blank" className="capitalize w-[90%] py-2 bg-blue-500
                        hover:bg-blue-600 text-center rounded-lg text-white text-xs font-semibold">
                        get in touch
                    </a>
                </div>
            </div>
        </div>
    )
}