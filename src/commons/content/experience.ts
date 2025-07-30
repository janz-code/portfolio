import type {IExperienceTimeline} from "../../home/types/ITimeline.ts";

export default async function getExperience(locale: string){
    const isDefault = locale === "en";
    return [
        {
            name: "Junior Full Stack Developer", institution: "IGD S.A.S", location: "Barranquilla, Colombia",
            type: "Experience", startDate: new Date("01/01/2021"), endDate: new Date("03/01/2024"),
        },
        {
            name: "Semi Senior Full Stack Developer", institution: "IGD S.A.S", location: "Barranquilla, Colombia",
            type: "Experience", startDate: new Date("03/01/2024"), endDate: new Date("05/01/2025"),
            achievements: isDefault ?
                [
                    "Led the development of the company’s flagship frontend project (Angular/React), implementing architectural improvements that boosted team efficiency by 15% and reduced development cycles.",
                    "Modernized legacy systems by migrating to React 19 and Next.js 15 (TypeScript), cutting technical debt by 35% and improving maintainability. In addition to achieving a 40% faster response time and enhanced security.",
                    "Developed high-performance APIs using Spring Boot and ASP.NET Core, optimizing database queries and caching to handle 20% more concurrent users.",
                    "Deployed and managed cloud solutions on Microsoft Azure and AWS.",
                    "Mentored junior developers in full-stack best practices (Angular, React, .NET, Spring Boot).",
                    "Implemented Agile/Scrum methodologies, helping improve delivery timelines through sprint planning and retrospectives."
                ]:
                [
                    "Lideré el desarrollo del proyecto frontend insignia de la empresa (Angular/React), implementando mejoras arquitectónicas que aumentaron la eficiencia del equipo en un 15% y redujeron los ciclos de desarrollo.",
                    "Modernicé sistemas heredados migrando a React 19 y Next.js 15 (TypeScript), reduciendo la deuda técnica en un 35% y mejorando la mantenibilidad. Además, se logró un tiempo de respuesta 40% más rápido y mayor seguridad.",
                    "Desarrollé APIs de alto rendimiento usando Spring Boot y ASP.NET Core, optimizando consultas a base de datos y caché para manejar un 20% más de usuarios concurrentes.",
                    "Desplegué y gestioné soluciones en la nube con Microsoft Azure y AWS.",
                    "Guié a desarrolladores junior en buenas prácticas full-stack (Angular, React, .NET, Spring Boot).",
                    "Implementé metodologías Ágiles/Scrum, mejorando los tiempos de entrega mediante planificación de sprints y retrospectivas."
                ]
        }
    ] as IExperienceTimeline[];
}
