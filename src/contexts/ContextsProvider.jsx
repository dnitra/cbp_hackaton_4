import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";
import { ContentContext } from "./ContentContext";

import { useState } from "react";

import { mainContent } from "../content/en/mainContent";
import { errors } from "../content/en/errors";

import { hlavniObsah } from "../content/cs/hlavniObsah";

export function ContextsProvider({ children }) {
 
 const themeModes ={
   lightTheme: {
      name:"lightTheme",
      color: "black",
      boxShadow: "10px 10px 40px -20px #000",
      backgroundColor: "#fff",
      
    },
   darkTheme: {
      name:"darkTheme",
      color: "white",
      boxShadow: "10px 10px 40px -20px #ccc",
      backgroundColor: "#333",
      
    }
  }
 

  const allContents = {
    en: {
      ...mainContent(),
    },
    cs: {
      ...hlavniObsah(),
    },
  };
  const [theme, setTheme] = useState(themeModes.lightTheme);
  const [content, setContent] = useState(allContents["en"]);

  const changeLang = (lang) => {   
    setContent(allContents[lang.target.value]);
  };

  const changeTheme = (chosenTheme) => {
    setTheme(themeModes[chosenTheme.target.value]);
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
