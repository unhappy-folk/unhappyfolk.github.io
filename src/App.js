import { useState } from "react";
import "./App.css";
import { LanguageContext } from "./Context";
import { QuoteContext } from "./Context";
import { MESSAGES } from "./Content/Quotes/Schema";
import { translate } from "./Content/Projects";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { classify } from "./classifier";
import orgs from "./Content/Projects/store";
import Page from "./Components/Page";

const issues = [
  {
    name: "Issue1",
    body: "",
    html_url: "",
    labels: [
      {
        name: "hamada",
      },
      {
        name: "documentation",
      },
      {
        name: "inquiry",
      },
    ],
  },
  {
    name: "Issue2",
    body: "",
    html_url: "",
    labels: [],
  },
  {
    name: "Issue3",
    body: "",
    html_url: "",
    labels: [
      {
        name: "good first issue",
      },
    ],
  },
  {
    name: "Issue3 Duplicate",
    body: "",
    html_url: "",
    labels: [
      {
        name: "good first issue",
      },
      {
        name: "duplicate",
      },
    ],
  },
  {
    name: "Issue4",
    body: "",
    html_url: "",
    labels: [
      {
        name: "bug",
      },
    ],
  },
  {
    name: "Issue5",
    body: "",
    html_url: "",
    labels: [
      {
        name: "enhancement",
      },
      {
        name: "help wanted",
      },
    ],
  },
];

function App() {
  const [language, setLanguage] = useState("ar");
  const direction = language === "ar" ? "rtl" : "ltr";
  const [quote, setQuote] = useState(MESSAGES[1]);
  const t = (text) => translate(text, language);

  // console.log(
  //   classify(
  //     githubRepositories["nuqayah/deen-projects"].issues,
  //     orgs[0].projects[0].contribution.classification
  //   )
  // );

  return (
    <LanguageContext.Provider value={[t, language, direction, setLanguage]}>
      <QuoteContext.Provider value={[quote, setQuote]}>
        <Page>
          <RouterProvider router={router} />
        </Page>
      </QuoteContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
