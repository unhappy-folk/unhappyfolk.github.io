//Import from react
import { useEffect, useContext, useState, useRef} from 'react';

//Import from content
import { MESSAGES } from '../../Content/Quotes/Schema'; 

//Import other components
import LanguagesBar from '../LanguagesBar/LanguagesBar';

//Import context
import { LanguageContext } from "../../Context";
import { QuoteContext } from '../../Context';

//Import style
import './Quote.css'

function Quote() {

    const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext);
    const [currentQuote, setCurrentQuote] = useContext(QuoteContext);
    const [fade, setFade] = useState('fade-in');
    const [isShown, setIsShown] = useState(true);

    const firstRender = useRef(true);

    useEffect(() => {
        setIsShown(true);
        if(firstRender.current) {
            firstRender.current = false;
            return;
        }
        setTimeout(() => {
            setCurrentQuote(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
            setFade('fade-in');
        }, 1000)
    }, [isShown])

    useEffect(() => {
        let showQuoteInterval = setInterval(() => {
            setFade('fade-out');
            setIsShown(false);
        }, 14000);
    }, []);   

    return (
        <div className='container'>
            <LanguagesBar/>
            <div className={`quote-container`}>
                {currentQuote.text ? 
                <div className={`${fade}`}>
                    <p className="quote">{currentQuote.text[`${currentLanguage}`]}</p>
                    <a className="quote-ref" href={currentQuote.src}>{currentQuote.author[`${currentLanguage}`]}</a>
                </div>
                : ''}
            </div>
        </div>
    )
}

export default Quote;