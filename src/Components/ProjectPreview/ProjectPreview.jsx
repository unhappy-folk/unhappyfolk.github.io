//Import context
import { useContext } from "react";
import { LanguageContext } from "../../Context";

function ProjectPreview ({project}) {
    const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext);
    
    return (
        <div className="h-24 hover:h-48 overflow-y-auto overscroll-contain  ease-out duration-300 m-2 p-2 rounded-xl shadow-md overflow-hidden bg-black text-[#facc15] w-100 lg:w-2/3" dir={`${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <div className="flex justify-center items-center">
                {project.logo && 
                <div className="w-14">
                    <img src={project.logo} alt={`${project.name} logo`} className="self-center h-14 object-scale-down"/>
                </div>
                }
                <p className="m-1 md:text-xl text-md">{project.name.toUpperCase()}</p>
            </div>
            <p className="text-zinc-50 text-clip">{project.about[currentLanguage]}</p>
            <div className="flex justify-center center-items">
                { project.visit &&
                <a href={project.visit}>
                    <button className="hover:bg-black hover:text-[#facc15] border-2 border-[#facc15] transition ease-in-out duration-300 m-1 sm:m-5 rounded-md py-2 px-4 bg-[#facc15] text-black">
                        Visit website
                    </button>
                </a>
                }
                { project.download &&
                    <a href={project.download}>
                        <button className="hover:bg-black hover:text-[#facc15] border-2 border-[#facc15] transition ease-in-out duration-300 m-1 sm:m-5 rounded-md py-2 px-4 bg-[#facc15] text-black">
                            Download
                        </button>
                    </a>
                }
            </div>
        </div>
    )
}

export default ProjectPreview;