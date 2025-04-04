import SkillsFilters from "./SkillsFilters.tsx";
import {useState} from "react";

export default function SkillsIsland() {

    const [active, setActive] = useState<number>(0);

    const handleActive = (key: number) => {
        setActive(key);
    }

    return(
        <div className="w-full flex flex-col items-center py-10">
            <ul className="flex items-center justify-center gap-x-2 w-full">
                <SkillsFilters onChange={handleActive} />
            </ul>
        </div>
    )
}