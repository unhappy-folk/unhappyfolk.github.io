import { languageContext } from "../../LanguageContext";
import { useContext } from 'react';
import LANGUAGES from '../../Content/Languages';

function LanguagesBar() {

    const [currentLanguage, setCurrentLanguage] = useContext(languageContext);

    const languagesButtons = LANGUAGES.map((language) => {

        return (
        <button className={ language.value == currentLanguage ? 'active-language-btn' : 'language-btn'} onClick={() => setCurrentLanguage(language.value)}>
            {language.spelling}
        </button>
        )
    })
    return (
        <div className="languages-bar">
            {languagesButtons}
        </div>
    );
}

export default LanguagesBar;