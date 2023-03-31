import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { LanguageContext } from "./Context";
import { QuoteContext } from "./Context";
import { MESSAGES } from "./Content/Quotes/Schema";
import Footer from "./Components/Footer/Footer";

function App() {
  const [language, setLanguage] = useState("ar");
  const direction = language === "ar" ? "rtl" : "ltr";
  const [quote, setQuote] = useState(MESSAGES[1]);

  return (
    <LanguageContext.Provider value={[language, direction, setLanguage]}>
      <QuoteContext.Provider value={[quote, setQuote]}>
        <Home />
        <br />

        <Footer />
      </QuoteContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
