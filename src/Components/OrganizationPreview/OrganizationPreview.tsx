// import useSWR from 'swr';

import React from "react";
import { useContext } from "react";
import copy from "../../Content/Copy";
import { LanguageContext } from "../../Context";
import { styles } from "../../styles";
import Blockquote from "../Blockquote";
import Card from "../Card";
import ProjectPreview from "../ProjectPreview/ProjectPreview";
import { Link } from "react-router-dom";
import { Organisation } from "../../Content/Projects/model";
// import Loading from '../../utils/Loading';

function OrganizationPreview({ org }: { org: Organisation }) {
  const [t, currentLanguage, direction, setCurrentLanguage] =
    useContext(LanguageContext);
  // This line is in case we're getting the data through the github API
  // const {data: topProjects, error, isLoading} = useSWR(org, getTopProjects)

  setCurrentLanguage("en");

  return (
    <Card>
      <div className="w-full pt-2" dir={direction}>
        <div className="w-full mx-auto flex flex-col justify-center items-center lg:flex-row">
          <div className="mx-auto flex justify-center  items-center w-32 h-32 mx-4 flex-grow-0 flex-shrink-0 lg:self-start">
            <img className="mb-6" src={org.logo} alt={`${t(org.name)} logo`} />
          </div>
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-2 mb-8">
            <div className={`${styles.typography.title}`}>
              <a target="_blank" href={org.links.website}>
                {t(org.name)}{" "}
                <span className={styles.typography.glyph}>&#x2197;</span>
              </a>
            </div>
            {org.about && (
              <Blockquote>
                <p className={`${styles.typography.content} rtl:text-center`}>
                  {t(org.about)}
                </p>
              </Blockquote>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center mb-3">
          <a
            target="_blank"
            href={org.links.donation}
            className="text-[#e0bb3f] text-3xl bg-black m-1 sm:m-5 rounded-lg py-3 px-6 hover:text-4xl hover:py-2 hover:px-4 ease-in-out duration-300"
          >
            {t(copy.buttons.donate)}
          </a>
          {org.contribution && (
            <Link
              target="_blank"
              to={`/contribute/${org.contribution.github.org};${org.contribution.github.repo}`}
              rel="noreferrer"
            >
              <button className="text-[#e0bb3f] text-3xl bg-zinc-50 m-1 sm:m-5 rounded-lg py-3 px-6 shadow-md hover:shadow-lg ease-in-out duration-300">
                {t(copy.buttons.contribute)}
              </button>
            </Link>
          )}
        </div>
        <hr />
        {org.projects && (
          <div className="my-4">
            <p
              className={`${styles.typography.header} mx-auto text-center mb-4`}
            >
              {t(copy.text.projectsHeader)}
            </p>
            <div className="lg:flex lg:flex-row lg:justify-around lg:items-start lg:flex-wrap">
              {/* {isLoading && <Loading color='000000' isLoading={isLoading}/>} */}{" "}
              {/* In case that is being fethced through the API */}
              {org.projects.map((p, index) => {
                return <ProjectPreview key={index} project={p} />;
              })}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default OrganizationPreview;
