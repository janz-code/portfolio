import type IHeaderContent from "../types/IHeaderContent.ts";
import type IContentLocales from "../types/IContentLocales.ts";

const translations: IContentLocales[] = [
    {en: "home", es: "inicio"},
    {en: "about me", es: "sobre mi"},
    {en: "projects", es: "proyectos"},
]
const getHeaderData = async (locale: string) => {
    const basePath = `/${locale}/`;
    return {
        title: "janz",
        nav: [
            {label: translations[0][locale], path: basePath},
            {label: translations[1][locale], path: basePath.concat("about")},
            {label: translations[2][locale], path: basePath.concat("projects")},
        ]
    } as IHeaderContent;
}

export default getHeaderData;