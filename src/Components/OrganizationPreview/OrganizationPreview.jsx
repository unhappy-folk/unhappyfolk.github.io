//Import data fetchers
// import { getTopProjects } from '../../utils/DataFetchers';

//Import from SWR
// import useSWR from 'swr';

//Import context
import { useContext } from "react";
import { LanguageContext } from "../../Context";
import { styles } from "../../styles";
import Card from "../Card";
import ProjectPreview from "../ProjectPreview/ProjectPreview";
// import Loading from '../../utils/Loading';

function OrganizationPreview({ org }) {
  const [currentLanguage, direction, setCurrentLanguage] =
    useContext(LanguageContext);
  // This line is in case we're getting the data through the github API
  // const {data: topProjects, error, isLoading} = useSWR(org, getTopProjects)

  setCurrentLanguage("en");

  return (
    <Card>
      <div className="lg:min-w-4/6 lg:w-max-5/6 " dir={direction}>
        <div className="mx-auto md:flex md:flex-row">
          <div className="mx-auto flex justify-center items-center w-36 h-36">
            <img className="" src={org.logo} alt={`${org.name} logo`} />
          </div>
          <div className="">
            <div className={styles.typography.title}>
              <a target="_blank" href={org.socialLinks.website}>
                {org.name}{" "}
                <span className={styles.typography.glyph}>&#x2197;</span>
              </a>
            </div>
            <p className={styles.typography.content}>
              {org.about[currentLanguage]}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mb-3">
          <a target="_blank" href={org.github}>
            <button className="text-[#e0bb3f] m-1 sm:m-5 rounded-lg py-4 px-8 bg-black hover:bg-[#facc15] hover:text-black border-2 border-black transition ease-in-out duration-300">
              {currentLanguage === "ar" ? "ساهم بالمساعدة" : "Contribute"}
            </button>
          </a>
          <a target="_blank" href={org.donation}>
            <button className="text-[#e0bb3f] m-1 sm:m-5 rounded-lg py-4 px-8 bg-black hover:bg-[#facc15] hover:text-black border-2 border-black transition ease-in-out duration-300">
              {currentLanguage === "ar" ? "تبرّع" : "Donate"}
            </button>
          </a>
        </div>
        <br />
        {org.topProjects && (
          <div>
            <div className="flex justify-center items-center m-3">
              <p className="text-black text-4xl font-extrabold">
                {currentLanguage === "ar" ? "أهم المشاريع" : "Top Projects"}
              </p>
            </div>
            <div className="block lg:flex lg:justify-center">
              {/* {isLoading && <Loading color='000000' isLoading={isLoading}/>} */}{" "}
              {/* In case that is being fethced through the API */}
              {org.topProjects.map((p, index) => {
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