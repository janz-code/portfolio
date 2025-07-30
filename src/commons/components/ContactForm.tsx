import "../styles/global.css"
import {type FormEvent, useCallback, useMemo, useRef, useState} from "react";
import ContactFormInput from "./ContactFormInput.tsx";
import ContactFormTextArea from "./ContactFormTextArea.tsx";

interface IInput{
    name:string
    placeholder:string
}
interface Props{
    isDefault:boolean;
    children:React.ReactNode;
}
export default function ContactForm({isDefault, children}: Props) {

    const [name] = useState<IInput>({name: isDefault ? "Name" : "Nombre",
        placeholder: isDefault ? "your name" : "tu nombre"})
    const [email] = useState<IInput>({name: isDefault ? "Email" : "Correo",
        placeholder: isDefault ? "your email" : "tu correo"})
    const [subject] = useState<IInput>({name: isDefault ? "Subject" : "Asunto",
        placeholder: isDefault ? "what's this about" : "tema a discutir"})
    const [message] = useState<IInput>({name: isDefault ? "Message" : "Mensaje",
        placeholder: isDefault ? "Tell me about your project or just say hello.." :
            "Hablame sobre tu proyecto o solo di 'Hola'.."})
    const [send] = useState<string>(isDefault ? "Send Message" : "Enviar Mensaje")

    const submitHandler = useCallback((event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data =
            Object.fromEntries(formData.entries()) as {name: string; email: string; subject: string; message: string};
        console.log(data);
    }, [])

    return(
        <form name="contact_form" className="grid gap-5" onSubmit={submitHandler}>
            <div className="w-full grid grid-cols-2 gap-5">
                <ContactFormInput id="name" name={name.name} placeholder={name.placeholder}/>
                <ContactFormInput id="email" name={email.name} type="email" placeholder={name.placeholder}/>
            </div>
            <ContactFormInput id="subject" name={subject.name} placeholder={subject.placeholder}/>
            <ContactFormTextArea id="message" name={message.name} placeholder={message.placeholder}/>
            <button type="submit"
                    className="w-full bg-light-bg border-[1px] border-light-border h-10 rounded-lg flex
                    items-center gap-x-2 justify-center text-text font-jetbrains cursor-pointer
                    hover:bg-surface-focus transition-all duration-300 ease-in-out hover:scale-y-125
                    hover:rounded-xl">
                <figure className="2xl:w-5 2xl:h-5 w-4 h-4">{children}</figure>
                <span className="font-medium 2xl:text-base text-sm">{send}</span>
            </button>
        </form>
    )
}