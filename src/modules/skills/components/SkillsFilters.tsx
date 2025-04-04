import skillFilters from "../data/skillsFilters.ts";
import {useState} from "react";
interface Props{
    onChange: (key: number) => void;
}
export default function SkillsFilters({onChange}: Props) {
    const [active, setActive] = useState<number>(0);
    return(
        <>
            {skillFilters.map((skill) => (
                <li key={skill.key} onClick={() => {setActive(skill.key); onChange(skill.key)}}
                    className={`px-4 border-b-2 font-poppins select-none font-medium hover:border-b-blue-400
                        cursor-pointer text-lg ${active === skill.key && 
                        'border-b-blue-400 text-blue-400'}`}>
                    <span>{skill.value}</span>
                </li>
            ))}
        </>
    )
}