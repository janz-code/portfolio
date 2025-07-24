export const getHomeHero = async (locale: string) => {
    const isDefault = locale === "en";
    return {
        location: isDefault ? "Location" : "Ubicación",
        birthday: isDefault ? "Birthday" : "Cumpleaños",
        experience: isDefault ? "Experience" : "Experiencia",
        typing: isDefault ? "Typing Speed" : "Velocidad De Escritura",
        wpm: isDefault ? "WPM" : "PPM",
        contact: isDefault ? "Contact" : "Contacto",
        name: isDefault ? "Name" : "Nombre",
    }
}