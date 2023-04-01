//Import context
import { useContext } from "react";
import { Project } from "../../Content/Projects/model";
import { LanguageContext } from "../../Context";
import { styles } from "../../styles";

function ProjectPreview({ project }: { project: Project }) {
  const [t, , direction] = useContext(LanguageContext);

  return (
    <div className="lg:w-2/6 p-2 mb-4" dir={direction}>
      <div className="flex flex-col justify-center items-center">
        <a
          className={`${styles.typography.header} font-bold`}
          href={project.links.website ?? project.links.github} 
        >
          {t(project.name)}
          <span className={styles.typography.glyph}>&#x2197;</span>
        </a>
        {project.about && (
          <p className={`${styles.typography.description} text-center`}>
            {t(project.about)}
          </p>
        )}
        {project.links.website && (
          <a target="_blank" href={project.links.website} rel="noreferrer">
            <button className="bg-white text-[#e0bb3f] border-2 border-gray-200 hover:text-xl py-2 px-4 hover:py-3 hover:px-4 ease-in-out duration-300 rounded-md mt-2">
              Visit website
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectPreview;
