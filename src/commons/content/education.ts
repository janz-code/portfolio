import type {IEducationTimeline} from "../../home/types/ITimeline.ts";

export default async function getEducation(locale: string){
    const isDefault = locale === "en";
    return [
        {
            name: "Systems engineering", type: "Degree", startDate: new Date("08-01-2019"),
            institution: "universidad del magdalena", location: "Santa Marta, Colombia",
            achievements: isDefault
                ? [
                    "Led the development of an academic student forum project.",
                    "Engineered data exploration projects using C programming, leveraging process-level and thread-level concurrency in Unix systems.",
                    "Mentored fellow students in mastering software development subjects, fostering technical growth and confidence.",
                    "Awarded a 5-year academic scholarship in recognition of outstanding performance."
                ]
                : [
                    "Lideré el desarrollo de un proyecto académico de foro estudiantil.",
                    "Implementé proyectos de exploración de datos utilizando el lenguaje de programación C, aprovechando concurrencia a nivel de procesos y hilos en sistemas Unix.",
                    "Guié a estudiantes en su proceso de aprendizaje en diversas materias del área de desarrollo de software, fomentando su crecimiento técnico.",
                    "Becado durante 5 años por rendimiento académico destacado."
                ]
        },
        {
            name: "Meta Backend Developer", type: "Course", startDate: new Date("09-01-2024"),
            location: "Coursera", institution: "Meta"
        },
        {
            name: ".Net Full Stack Foundation", institution: "Board Infinity", type: "Course", location: "Coursera",
            startDate: new Date("02-01-2024"),
        },
        {
            name: "Meta android developer", institution: "Meta", type: "Course",
            location: "Coursera", startDate: new Date("10-01-2023"),
        },
        {
            name: "Back-end Oracle Next Education", institution: "Alura ONE", type: "Bootcamp", location: "Alura Latam",
            startDate: new Date("04-01-2023"), endDate: new Date("10-01-2023")
        }
    ] as IEducationTimeline[];
}