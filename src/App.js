import { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { LanguageContext } from './Context';
import { QuoteContext } from './Context'
import { MESSAGES } from './Content/Quotes/Schema';

function App() {

  const [language, setLanguage] = useState('ar');
  const [quote, setQuote] = useState(MESSAGES[0]);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <QuoteContext.Provider value={[quote, setQuote]}>
        <div className="App">
          <Home />
        </div>
      </QuoteContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
