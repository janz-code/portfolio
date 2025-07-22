const enHomeHero = {
    location: "Location",
    birthday: "Birthday",
    experience: "Experience",
}
const esHomeHero = {
    location: "Ubicación",
    birthday: "Cumpleaños",
    experience: "Experiencia",
}

export const getHomeHero = async (locale: string) => locale === "en" ? enHomeHero : esHomeHero;