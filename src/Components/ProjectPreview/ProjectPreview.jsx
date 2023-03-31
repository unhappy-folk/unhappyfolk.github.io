//Import context
import { useContext } from "react";
import { LanguageContext } from "../../Context";

function ProjectPreview ({project}) {
    const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext);
    
    return (
        <div className="h-24 ease-out duration-300 hover:h-48 m-2 p-2 rounded-xl shadow-md overflow-hidden bg-black text-[#facc15] w-100 lg:w-2/3" dir={`${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <div className="flex justify-center bg-red">
                {project.logo && 
                <img src={project.logo} alt={`${project.name} logo`} className="self-center h-14 object-scale-down"/>
                }
                <p className="m-2 md:text-xl text-md">{project.name.toUpperCase()}</p>
            </div>
            <p className="text-zinc-50 text-clip">{project.about[currentLanguage]}</p>
        </div>
    )
}

export default ProjectPreview;