import { useState } from "react";
import "./App.css";
import { LanguageContext } from "./Context";
import { QuoteContext } from "./Context";
import { MESSAGES } from "./Content/Quotes/Schema";
import { translate } from "./Content/Projects";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

function App() {
  const [language, setLanguage] = useState("ar");
  const direction = language === "ar" ? "rtl" : "ltr";
  const [quote, setQuote] = useState(MESSAGES[1]);
  const t = (text) => translate(text, language);

  return (
    <LanguageContext.Provider value={[t, language, direction, setLanguage]}>
      <QuoteContext.Provider value={[quote, setQuote]}>
        <RouterProvider router={router} />
      </QuoteContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
