export const getProficiency = (proficiency: number, locale: string): string => {
    const isDefault = locale === "en";
    if (proficiency <= 0) {
        return isDefault ? "Novice" : "Novato";
    } else if (proficiency < 2) {
        return isDefault ? "Beginner" : "Principiante";
    } else if (proficiency < 4) {
        return isDefault ? "Apprentice" : "Aprendiz";
    } else if (proficiency < 6) {
        return isDefault ? "Intermediate" : "Intermedio";
    } else if (proficiency < 8) {
        return isDefault ? "Advanced" : "Avanzado";
    } else if (proficiency < 10) {
        return isDefault ? "Professional" : "Profesional";
    } else {
        // maybe I will never use this level on this project
        return isDefault ? "Expert" : "Experto";
    }
};