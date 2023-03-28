import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { LanguageContext } from "./Context";
import { QuoteContext } from "./Context";
import { MESSAGES } from "./Content/Quotes/Schema";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

function App() {
  const [language, setLanguage] = useState("ar");
  const [quote, setQuote] = useState(MESSAGES[1]);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <QuoteContext.Provider value={[quote, setQuote]}>
        <RouterProvider router={router} />
      </QuoteContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
