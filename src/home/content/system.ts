const enHomeHero = {
    location: "Location",
    birthday: "Birthday",
}
const esHomeHero = {
    location: "Ubicación",
    birthday: "Cumpleaños"
}

export const getHomeHero = async (locale: string) => locale === "en" ? enHomeHero : esHomeHero;