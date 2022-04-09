//Import from react
import { useContext, useEffect } from 'react';

//Import from context
import { LanguageContext } from "../../Context";
import { QuoteContext } from '../../Context';

//Import constants
import LANGUAGES from '../../Content/Languages';

//Import style
import './LanguagesBar.css'

function LanguagesBar() {

    const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext);
    const [currentQuote, setCurrentQuote] = useContext(QuoteContext);

    useEffect(() => {
        if(!currentQuote.text[`${currentLanguage}`] ) { 
            LANGUAGES.map((language) => {
                if(currentQuote.text[`${language.value}`]) {
                    setCurrentLanguage(language.value)
                } 
            })
        }
    }, [currentQuote])

    const languagesButtons = LANGUAGES.map((language) => {

        return (
        <button disabled={!currentQuote.text[`${language.value}`] ? 'active-language disabled' : ''} 
                className={ language.value == currentLanguage ? 'active-language-btn' : 'language-btn'}
                onClick={() => handleClick(language)}
        >
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