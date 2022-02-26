import { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { languageContext } from './LanguageContext';

function App() {

  const [language, setLanguage] = useState('ar'); 
  
  return (
    <div className="App">
      <languageContext.Provider value={[language, setLanguage]}>
        <Home/>
      </languageContext.Provider> 
    </div>
  );
}

export default App;
