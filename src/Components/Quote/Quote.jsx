import QUOTES_SCHEMA from '../../Content/Quotes/Schema'; 
import LanguagesBar from '../LanguagesBar/LanguagesBar';

function Quote() {
    return (
        <div className="quote-container">
            <LanguagesBar/>
            <p className="quote">" {QUOTES_SCHEMA[0].quote} "</p>
            <a href={QUOTES_SCHEMA[0].reference} className="quote-ref">- {QUOTES_SCHEMA[0].author}</a>
        </div>
    )
}

export default Quote;