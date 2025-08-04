export const getDate = (date?: Date) => {
    if(!date) return [0, 0]
    return [date.getMonth(), date.getFullYear()]
}

const month = {
    en: [
        "january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
    ],
    es: [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ]
}

export const i18nDate = (locale: string, start: Date, end?: Date) => {
    const startNumber = getDate(start)
    const endNumber = getDate(end);
    //@ts-ignore
    return `${month[locale][startNumber[0]]}, ${startNumber[1]} - ${end ? `${month[locale][endNumber[0]]}, ${endNumber[1]}` :
        locale === "en" ? "in course" : "en curso"}`
}