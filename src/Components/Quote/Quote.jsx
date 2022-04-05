//Import from react
import { useEffect, useContext, useState, useMemo    } from 'react';

//Import from content
import { MESSAGES } from '../../Content/Quotes/Schema'; 

//Import other components
import LanguagesBar from '../LanguagesBar/LanguagesBar';

//Import context
import { LanguageContext } from "../../LanguageContext";

//Import style
import './Quote.css'

function Quote() {

    const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext);
    const [currentQuote, setCurrentQuote] = useState(MESSAGES[0]);
    const [fade, setFade] = useState('fade-in');
    const [isShown, setIsShown] = useState(true);

    useEffect(() => {
        setIsShown(true);
        setTimeout(() => {
            setCurrentQuote(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
            setFade('fade-in');
        }, 1000)
    }, [isShown])

    useEffect(() => {
        console.log(currentQuote);
    }, [currentQuote])

    useEffect(() => {
        let showQuoteInterval = setInterval(() => {
            setFade('fade-out');
            setIsShown(false);
        }, 14000);
    }, [])

    

    return (
        
        <div className={`quote-container`}>
            <p style={{fontSize: '150%'}}></p>
            <LanguagesBar/> 
            {currentQuote.text ? 
            <div className={`${fade}`}>
                <p className="quote">{currentLanguage == 'ar' ? currentQuote.text.ar : currentQuote.text.en}</p>
                <a className="quote-ref" href={currentQuote.src}>{currentLanguage == 'ar' ? currentQuote.author.ar : currentQuote.author.en}</a>
            </div>
            : ''}
        </div>
    )
}

export default Quote;