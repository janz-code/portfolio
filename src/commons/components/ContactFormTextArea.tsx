interface Props{
    id: string
    name: string
    placeholder: string
}
export default function ContactFormTextArea({id, name, placeholder}:Props) {
    return(
        <div className="relative pt-2 font-poppins">
            <label className="absolute -top-1.5 left-3 font-extralight text-sm bg-white px-1"
                   htmlFor={id}>{name}</label>
            <textarea id={id} className="w-full outline-none placeholder:capitalize border-[1px]
                border-light-border rounded-md px-3 2xl:px-4 py-1 font-light min-h-20 text-sm"
                   name={id} placeholder={placeholder} />
        </div>
    )
}