interface Props{
    id: string;
    name: string
    placeholder: string
    type?: string
}
export default function ContactFormInput({id, name, placeholder, type}:Props) {
    return(
        <div className="relative pt-2 font-poppins">
            <label className="absolute top-0 2xl:-top-1 left-3 font-extralight text-xs 2xl:text-sm bg-white px-1"
                   htmlFor={id}>{name}</label>
            <input id={id} className="h-8 w-full outline-none placeholder:capitalize border-[1px]
                border-light-border rounded-md px-3 2xl:px-4 py-1 font-light text-sm valid:border-emerald-400"
                   type={type ? type : "text"} name={id} placeholder={placeholder} required />
        </div>
    )
}