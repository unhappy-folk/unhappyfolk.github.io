import { useContext } from "react";
import copy from "../../Content/Copy";
import { Project } from "../../Content/Projects/model";
import { LanguageContext } from "../../Context";
import { styles } from "../../styles";

function ProjectPreview({ project }: { project: Project }) {
  const [t, , direction] = useContext(LanguageContext);

  return (
    <div
      className="bg-stone-800 bg-opacity-10 rounded-md lg:w-2/5 p-2 mb-4"
      dir={direction}
    >
      <div className="flex flex-col justify-center items-center">
        <a
          target="_blank"
          className={`${styles.typography.header} `}
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
        {project.links.github && (
          <a target="_blank" href={project.links.github} rel="noreferrer">
            <button className="bg-white subpixel-antialiased text-[#e0bb3f] border-2 border-gray-200 text-xl font-weight-2 py-2 px-4 hover:py-3 hover:px-4 ease-in-out duration-300 rounded-md mt-2">
              {t(copy.buttons.contribute)}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectPreview;
