//Import from react
import { useContext } from 'react';

//Import from context
import { LanguageContext } from "../../LanguageContext";

//Import constants
import LANGUAGES from '../../Content/Languages';

//Import style
import './LanguagesBar.css'

function LanguagesBar() {

    const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext);

    const languagesButtons = LANGUAGES.map((language) => {

        return (
        <button className={ language.value == currentLanguage ? 'active-language-btn' : 'language-btn'} onClick={() => handleClick(language)}>
            {language.spelling}
        </button>
        )
    })

    const handleClick = (language) => {
        setCurrentLanguage(language.value);
    }

    return (
        <div className="languages-bar">
            {languagesButtons}
        </div>
    );
}

export default LanguagesBar;