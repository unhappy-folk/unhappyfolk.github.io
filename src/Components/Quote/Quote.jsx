import QUOTES_SCHEMA from '../../Content/Quotes/Schema'; 
import LanguagesBar from '../LanguagesBar/LanguagesBar';
import { useEffect, useContext, useState } from 'react';
import { languageContext } from "../../LanguageContext";

function Quote() {

    const [currentLanguage, setCurrentLanguage] = useContext(languageContext);
    const [currentQuote, setCurrentQuote] = useState({});

    useEffect(() => {
        //TODO....
    }, [currentLanguage, 6000])

    return (
        <div className="quote-container">
            <LanguagesBar/>
            <p className="quote">" {QUOTES_SCHEMA[0].quote} "</p>
            <a href={QUOTES_SCHEMA[0].reference} className="quote-ref">- {QUOTES_SCHEMA[0].author}</a>
        </div>
    )
}

export default Quote;