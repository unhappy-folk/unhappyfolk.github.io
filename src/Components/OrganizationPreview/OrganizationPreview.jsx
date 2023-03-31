//Import data fetchers
// import { getTopProjects } from '../../utils/DataFetchers';

//Import from SWR
// import useSWR from 'swr';

//Import context
import { useContext } from "react";
import { LanguageContext } from "../../Context";
import ProjectPreview from '../ProjectPreview/ProjectPreview';
// import Loading from '../../utils/Loading';

function OrganizationPreview({org}) {
    const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext);
    // This line is in case we're getting the data through the github API
    // const {data: topProjects, error, isLoading} = useSWR(org, getTopProjects)
    
    setCurrentLanguage('en')
    
    return (
        <div className="mt-2 w-5/6" dir={`${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <div className="bg-[#facc15] rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="flex justify-center items-center max-w-24 m-3">
                      <img className="self-center w-48 object-cover" src={org.logo} alt={`${org.name} logo`}/>
                    </div>
                    <div className="p-8 self-center">
                      <div className="uppercase tracking-wide text-xl text-[#1e293b] font-semibold">
                        <a href={org.socialLinks.website} >{org.name}</a>
                      </div>
                      <p className="mt-2 text-slate-600 text-lg">{org.about[currentLanguage]}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mb-3">
                    <a href={org.github}>
                        <button className="m-1 sm:m-5 rounded-lg py-4 px-8 bg-black hover:bg-[#facc15] hover:text-black border-2 border-black transition ease-in-out duration-300">
                            {currentLanguage === 'ar' ? 'ساهم بالمساعدة' : 'Contribute'}
                        </button>
                    </a>
                    <a href={org.donation}>
                        <button className="m-1 sm:m-5 rounded-lg py-4 px-8 bg-black hover:bg-[#facc15] hover:text-black border-2 border-black transition ease-in-out duration-300">
                            {currentLanguage === 'ar' ? 'تبرّع' : 'Donate'}
                        </button>
                    </a>
                </div>
                <br/>
                {org.topProjects &&
                <div>
                    <div className="flex justify-center items-center m-3">
                        <p className="text-black text-4xl font-extrabold">{currentLanguage === 'ar' ? 'أهم المشاريع' : 'Top Projects'}</p>
                    </div>
                    <div className='block lg:flex lg:justify-center'>
                        {/* {isLoading && <Loading color='000000' isLoading={isLoading}/>} */} {/* In case that is being fethced through the API */}
                        {org.topProjects.map((p, index) => {
                            return <ProjectPreview key={index} project={p}/>
                        })}
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default OrganizationPreview;