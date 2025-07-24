import type ITestimonial from "../types/ITestimonial.ts";
import {type ReactNode, useState} from "react";
interface Props{
    data:ITestimonial[]
}
export default function TestimonialsIsland({data}: Props) {
    const [active, setActive] = useState<number>(0);
    return(
        <>
            <ul className="w-full flex items-center justify-center relative h-full">
                {data.map((item,index) => (
                    <li key={index} className={`w-[150px] h-[150px] rounded-lg bg-light-surface
                        overflow-hidden absolute transition-all duration-500 border-2 border-light-shadow`}
                        style={{zIndex: index===active ? data.length : index,
                            rotate: `${index===active? 0 : 16*(index+1)}deg`}}>
                        {item.icon ? (
                            <img src={item.icon} alt={`${item.title} profile`} width={150} height={150}
                                 className="object-contain transition-all duration-500"
                                 style={{opacity: index===active ? 1 : 0}} />
                        ): null}
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-y-2">
                <div className="font-cascadia place-self-end pr-5">
                    {active+1} / {data.length}
                </div>
                <div className="w-full h-fit py-5 px-4 font-sweet bg-light-surface rounded-2xl flex flex-col gap-y-5">
                    <div>
                        <h3 className="font-bold font-cascadia text-2xl">{data[active].title}</h3>
                        <h4 className="font-semibold font-cascadia">{data[active].subtitle}</h4>
                    </div>
                    <p className="font-poppins font-light">{data[active].description}</p>
                </div>
                <div className="flex items-center gap-x-4 place-self-end">
                    <Button handler={()=> setActive(prev => active === 0 ? data.length-1 : prev-1)}>
                        {"-"}
                    </Button>
                    <Button handler={()=> setActive(prev => active === data.length-1 ? 0 : prev+1)}>
                        {"+"}
                    </Button>
                </div>
            </div>
        </>
    )
}

const Button = ({handler, children}:{handler: ()=> void, children: ReactNode}) => {
    return(
        <button className="focus:outline-none w-8 h-8 flex items-center justify-center bg-light-surface rounded-full
            text-lg cursor-pointer"
            onClick={handler}>
            {children}
        </button>
    )
}