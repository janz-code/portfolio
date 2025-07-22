import type IServices from "../types/IServices.ts";
import BackendIcon from "../../commons/assets/icons/services/BackendIcon.astro"
import FrontendIcon from "../../commons/assets/icons/services/FrontendIcon.astro"

const getDevelopment = (isDefault: boolean, content: string) =>
    `${!isDefault ? "desarrollo" : ""} ${content} ${isDefault ? "development" : ""}`

export default async function getServices(locale: string) {
    const isDefault = locale === "en";
    return [
        { label: getDevelopment(isDefault, "backend"), description: "", icon: BackendIcon },
        { label: getDevelopment(isDefault, "frontend"), description: "", icon: FrontendIcon },
    ] as IServices[];
}