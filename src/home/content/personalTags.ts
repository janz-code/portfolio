const en = {
    time: "Time Mgmt",
    learning: "Learning Agility",
    mentorship: "Teamwork"
}
const es = {
    time: "Gestión Tiempo",
    learning: "Agilidad Aprendizaje",
    mentorship: "Trabajo en Equipo"
}
const getPersonalTags = async (locale: string) => locale === "en" ? en : es;

export default getPersonalTags;