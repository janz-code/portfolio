import type ISocialMedia from "../../commons/types/ISocialMedia.ts";
import {useMemo} from "react";
import {getCardPosition} from "../services/getCardPosition.ts";

interface Props{
    data: ISocialMedia[]
}
export default function HeroSocialCards({data}: Props) {
    return(
        <div className="w-[350px] h-fit pb-5 flex flex-col justify-center items-center gap-y-4">
            {Array.from({length: Math.ceil(data.length/2)}).map((_, index) => (
                <ul className="flex justify-center items-center w-full relative">
                    {data.slice(3*index, 3*(index+1)).map((item, index) => (
                        <Card index={index} item={item}/>
                    ))}
                </ul>
            ))}
        </div>
    )
}

interface CardProps{
    index: number;
    item: ISocialMedia;
}
function Card({index, item}: CardProps){
    const position = useMemo(()=> getCardPosition(index), [index]);
    return(
        <div className={`${index==0 ? "block" : "absolute"} flex flex-col border-[1px] 
            border-light-border bg-light-bg rounded-lg overflow-hidden w-2/5 h-fit gap-y-2 font-sweet p-1`}
             style={{zIndex: 40-index, ...position}}>
            <div className={`relative w-full h-16 bg-gradient-to-br ${item.banner} rounded-lg`}>
                <figure className="rounded-full w-8 h-8 bg-white absolute -bottom-3.5 left-4 flex items-center
                    justify-center">
                    <img src={item.icon} alt="social media icon" width={20} height={20} />
                </figure>
            </div>
            <div className="flex flex-col gap-y-2 py-1 px-1.5">
                <h4 className="font-cascadia font-bold text-base">{item.name}</h4>
                <div className="text-xs font-light flex items-center justify-center">
                    <a href={item.url} target="_blank" className="capitalize w-full py-1.5 bg-blue-500
                        hover:bg-blue-600 text-center rounded-lg text-white text-xs font-semibold">
                        get in touch
                    </a>
                </div>
            </div>
        </div>
    )
}