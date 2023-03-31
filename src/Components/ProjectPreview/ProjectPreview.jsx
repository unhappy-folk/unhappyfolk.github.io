//Import context
import { useContext } from "react";
import { LanguageContext } from "../../Context";
import { styles } from "../../styles";

function ProjectPreview({ project }) {
  const [currentLanguage, direction, setCurrentLanguage] =
    useContext(LanguageContext);

  return (
    <div className="p-4" dir={direction}>
      <div className="flex justify-center items-center">
        <p
          className={`${styles.typography.header} ${styles.typography.colors.primary}`}
        >
          {project.name}
        </p>
      </div>
      <p className={`${styles.typography.description}`}>
        {project.about[currentLanguage]}
      </p>
      <div className="flex justify-center items-center">
        {project.visit && (
          <a target="_blank" href={project.visit}>
            <button className="bg-black text-[#e0bb3f] rounded-md py-2 px-4">
              Visit website
            </button>
          </a>
        )}
        {project.download && (
          <a href={project.download}>
            <button className="bg-black text-[#e0bb3f] rounded-md py-2 px-4">
              Download
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectPreview;