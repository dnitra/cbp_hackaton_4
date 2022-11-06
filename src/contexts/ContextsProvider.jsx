import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";
import { ContentContext } from "./ContentContext";

import { useState } from "react";

import { mainContent } from "../content/en/mainContent";
import { errors } from "../content/en/errors";

import { hlavniObsah } from "../content/cs/hlavniObsah";

export function ContextsProvider({ children }) {
  const enContent = mainContent();

  const csContent = hlavniObsah();

  const allContents = {
    en: {
      ...enContent,
    },
    cs: {
      ...csContent,
    },
  };

  const [theme, setTheme] = useState("light-theme");
  const [content, setContent] = useState(allContents["en"]);

  const changeLang = (lang) => {
    console.log(lang.target.value)
   
    setContent(allContents[lang.target.value]);
  };

  const changeTheme = (chosenTheme) => {
    setTheme(chosenTheme);
  };

  return (
    <ContentContext.Provider value={content}>
      <LanguageContext.Provider value={{ changeLang }}>
        <ThemeContext.Provider value={{ theme, changeTheme }}>
          {children}
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </ContentContext.Provider>
  );
}
