import type IServices from "../types/IServices.ts";
import BackendIcon from "../../commons/assets/icons/services/BackendIcon.astro"
import FrontendIcon from "../../commons/assets/icons/services/FrontendIcon.astro"
import MobileIcon from "../../commons/assets/icons/services/MobileIcon.astro"

const getDevelopment = (isDefault: boolean, content: string) =>
    `${!isDefault ? "desarrollo" : ""} ${content} ${isDefault ? "development" : ""}`

export default async function getServices(locale: string) {
    const isDefault = locale === "en";
    return [
        {
            label: getDevelopment(isDefault, "backend"),
            description: isDefault ?
                "I craft solid backends with passion — clean code, smart architecture, and real performance." :
                "Desarrollo backends sólidos con pasión: código limpio, arquitectura inteligente y rendimiento real.",
            icon: BackendIcon
        },
        {
            label: getDevelopment(isDefault, "frontend"),
            description: isDefault ?
                "I bring interfaces to life — smooth interactions, pixel precision, and a spark of creativity.":
                "Doy vida a las interfaces: interacciones fluidas, precisión al píxel y un toque de creatividad.",
            icon: FrontendIcon
        },
        {
            label: getDevelopment(isDefault, "mobile"),
            description: isDefault ?
                "I build mobile experiences that feel native — fast, intuitive, and ready for the world.":
                "Creo experiencias móviles que se sienten nativas: rápidas, intuitivas y listas para el mundo.",
            icon: MobileIcon
        }
    ] as IServices[];
}