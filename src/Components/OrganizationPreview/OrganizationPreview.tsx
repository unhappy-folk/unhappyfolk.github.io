//Import data fetchers
// import { getTopProjects } from '../../utils/DataFetchers';

//Import from SWR
// import useSWR from 'swr';

//Import context
import { useContext } from "react";
import { Organisation } from "../../Content/Projects/model";
import { LanguageContext } from "../../Context";
import { styles } from "../../styles";
import Card from "../Card";
import ProjectPreview from "../ProjectPreview/ProjectPreview";
// import Loading from '../../utils/Loading';

function OrganizationPreview({ org }: { org: Organisation }) {
  const [t, currentLanguage, direction, setCurrentLanguage] =
    useContext(LanguageContext);
  // This line is in case we're getting the data through the github API
  // const {data: topProjects, error, isLoading} = useSWR(org, getTopProjects)

  setCurrentLanguage("en");

  return (
    <Card>
      <div className="w-full" dir={direction}>
        <div className="w-full mx-auto flex flex-col justify-center items-center lg:flex-row">
          <div className="mx-auto flex justify-center items-center w-32 h-32 mx-4 flex-grow-0 flex-shrink-0">
            <img className="mb-6" src={org.logo} alt={`${t(org.name)} logo`} />
          </div>
          <div className="flex flex-col justify-center items-center mb-8">
            <div className={styles.typography.title}>
              <a target="_blank" href={org.links.website} rel="noreferrer">
                {t(org.name)}{" "}
                <span className={styles.typography.glyph}>&#x2197;</span>
              </a>
            </div>
            {org.about && (
              <p className={styles.typography.content}>{t(org.about)}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center mb-3">
          {/* <a target="_blank" href={org.links.github}>
            <button className="text-[#e0bb3f] m-1 sm:m-5 rounded-lg py-4 px-8 bg-black hover:bg-[#facc15] hover:text-black border-2 border-black transition ease-in-out duration-300">
              {currentLanguage === "ar" ? "ساهم بالمساعدة" : "Contribute"}
            </button>
          </a> */}
          <a target="_blank" href={org.links.donation} rel="noreferrer">
            <button className="text-[#e0bb3f] text-2xl bg-black m-1 sm:m-5 rounded-lg py-10 px-20 hover:text-3xl hover:py-12 hover:px-24 ease-in-out duration-300">
              {currentLanguage === "ar" ? "تبرّع" : "Donate"}
            </button>
          </a>
        </div>
        <br />
        {org.projects && (
          <div>
            <div className="mx-auto mb-4">
              <p className="text-black text-center text-4xl font-extrabold">
                {currentLanguage === "ar" ? "أبرز المشاريع" : "Top Projects"}
              </p>
            </div>
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
