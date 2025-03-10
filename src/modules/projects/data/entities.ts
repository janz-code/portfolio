import type IFilter from "../types/IFilter"
import python from "../../../core/assets/icons/python.svg"
import javascript from "../../../core/assets/icons/javascript.svg"
import typescript from "../../../core/assets/icons/typescript.svg"
import csharp from "../../../core/assets/icons/csharp.svg"

export const languages: Record<string, IFilter> = {
  python: { label: "Python", icon: python.src },
  javascript: { label: "Javascript", icon: javascript.src },
  typescript: { label: "Typescript", icon: typescript.src },
  chsarp: { label: "CSharp", icon: csharp.src }
}
