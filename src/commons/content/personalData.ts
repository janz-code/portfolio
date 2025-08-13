const getPersonalData = async (locale: string) => {
    const isDefault = locale === "en";
    return {
        firstName: "Juan Camilo",
        lastName: "Zuniga Pacheco",
        name: "Juan Zuniga",
        city: "Santa Marta",
        country: "Colombia",
        birthday: "02/04/2001",
        experience: isDefault ? "4 years" : "4 años",
        job: isDefault ? "Systems engineer specialized in multiplatforms software development":
            "Ingeniero de sistemas especializado en el desarrollo de software multiplataformas",
        wpm: 64,
        time: 15,
        precision: 97,
        locale: "EN"
    }
}
export default getPersonalData;