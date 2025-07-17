const getPersonalData = async (locale: string) => {
    const isDefault = locale === "en";
    return {
        firstName: "Juan Camilo",
        lastName: "Zuniga Pacheco",
        name: "Juan Zuniga",
        city: "Santa Marta",
        country: "Colombia",
        birthday: "02-04-2001",
    }
}
export default getPersonalData;