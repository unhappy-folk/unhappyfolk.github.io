import React from "react";
import { useContext } from "react";
import copy from "../../Content/Copy";
import { Project } from "../../Content/Projects/model";
import { LanguageContext } from "../../Context";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

function ProjectPreview({ project }: { project: Project }) {
  const [t, , direction] = useContext(LanguageContext);

  return (
    <div
      className="bg-stone-800 bg-opacity-10 rounded-md w-11/12 p-2 mb-4"
      dir={direction}
    >
      <div className="flex flex-col justify-center items-center">
        <a
          target="_blank"
          className={`${styles.typography.subheader}`}
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
        {project.contribution && (
          <Link
            target="_blank"
            to={`/contribute/${project.contribution.github.org};${project.contribution.github.repo}`}
            rel="noreferrer"
          >
            <button className="bg-white subpixel-antialiased text-[#e0bb3f] text-xl font-weight-2 py-2 px-4 rounded-md mt-2 shadow-md hover:shadow-lg ease-in-out duration-300">
              {t(copy.buttons.contribute)}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectPreview;
