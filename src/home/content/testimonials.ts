import type ITestimonial from "../types/ITestimonial.ts";
import yeferson from "../assets/images/testimonials/yeferson.png"
import igd from "../assets/images/testimonials/igd.png"

export default async function getTestimonials(locale: string){
    const isDefault = locale === "en";
    return [
        {
            title: 'Yeferson Ruzon', subtitle: "UI/UX Developer & Designer - Coworker",
            description: "Working alongside Juan has been a rewarding experience. His ability to bridge frontend and backend workflows made collaboration seamless. His code is clean, well-structured, and always thoughtfully integrated with the design vision.",
            icon: yeferson.src
        },
        {
            title: "IGD S.A.S", subtitle: "Software Company",
            description: "Over the past four years, Juan has been instrumental in developing and evolving our core systems. His dedication, problem-solving skills, and ability to lead critical migrations have significantly improved our backend performance and team workflows.",
            icon: igd.src
        }
    ] as ITestimonial[];
}