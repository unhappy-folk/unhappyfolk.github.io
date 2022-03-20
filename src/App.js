import { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { languageContext } from './LanguageContext';

function App() {

  const [language, setLanguage] = useState('ar'); 
  
  return (
    <div
      className="App"
      style={{ height: "70vh", width: "100%", overflowY: "scroll" }}
    >
      <Home />
    </div>
  );
}

export default App;
