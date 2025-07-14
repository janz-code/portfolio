import {useEffect} from "react";

export default function ThemeSelector({children}: {children: any}) {
    useEffect(()=> {
        document.addEventListener("load", async () => {
            const theme = localStorage.getItem("theme");
            if(!theme || theme === "light") return;
            document.body.classList.add("dark");
        })
    }, [])
    const handleChange = () => {
        if(document.body.classList.contains("dark")){
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
            return
        }
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    return (
        <div onClick={handleChange} className="w-7 h-7 rounded-full cursor-pointer dark:text-amber-500 text-indigo-400
            transition-colors duration-500 p-1 bg-light-bg">
            {children}
        </div>
    )
}