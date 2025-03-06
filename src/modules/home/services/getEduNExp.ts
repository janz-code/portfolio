import enENE from "../data/edunexp/en";
import esENE from "../data/edunexp/es";

const getEduNExp = (lang: string) => {
  const date = lang === "es" ? enENE : esENE;
  return date.sort((a, b) => a.start.getTime() - b.start.getTime())
}

export default getEduNExp;