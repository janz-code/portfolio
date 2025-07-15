const enHomeHero = {
    blogging: "divulgation"
}
const esHomeHero = {
    blogging: "divulgación"
}

export const getHomeHero = async (locale: string) => locale === "en" ? enHomeHero : esHomeHero;