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
        <p
          className={`${styles.typography.header} ${styles.typography.colors.primary}`}
        >
          {t(project.name)}
        </p>
        {project.about && (
          <p className={`${styles.typography.description} text-center`}>
            {t(project.about)}
          </p>
        )}
        {project.links.website && (
          <a target="_blank" href={project.links.website}>
            <button className="bg-black text-[#e0bb3f] rounded-md py-2 px-4">
              Visit website
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectPreview;
