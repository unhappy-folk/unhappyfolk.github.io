import { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { LanguageContext } from './LanguageContext';

function App() {

  const [language, setLanguage] = useState('ar');

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <div className="App">
        <Home />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
