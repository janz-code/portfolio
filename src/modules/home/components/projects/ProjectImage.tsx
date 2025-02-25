import {useState} from "react";

export default function ProjectImage({src, alt}: {src: string, alt: string}) {
    const [openProjectModal, setOpenProjectModal] = useState<boolean>(false)
    return(
        <>
            {openProjectModal && (
                <div onClick={() => setOpenProjectModal(false)}
                    className="fixed w-dvw h-dvh top-0 left-0 z-50 bg-black/10 backdrop-blur-md flex items-center justify-center">
                    <div className="w-[80%] h-[80%]">
                        <img src={src} alt={alt} className="w-full h-full" />
                    </div>
                </div>
            )}
        </>
    )
}