
 import { useState } from "react";

/**
 * import all contexts
 */
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";
import { ContentContext } from "./ContentContext";


/**
 * import all files from EN folder (english)
 */
import { mainContent } from "../content/en/mainContent";
import { errors } from "../content/en/errors";

/**
 * import all files from CS folder (czech)
 */
import { hlavniObsah } from "../content/cs/hlavniObsah";


/**
 * create one ContextsProvider component which takes childern as parameter
 * and pass all individual context providers
 * 
 * This way we can have just one Context provider in our index.jsx file
 */
export function ContextsProvider({ children }) {
 
  /**
   * create object which contains different themes whit basic styling
   * we can switch between them
   */
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
 

/**
 *  create object which contains different language files
 * use the imported files and spread the content inside the different languages
 */
  const allContents = {
    en: {
      ...mainContent(),
    },
    cs: {
      ...hlavniObsah(),
    },
  };

  //create states which will switch between the key words of corresponding objects
  const [theme, setTheme] = useState(themeModes.lightTheme);
  const [content, setContent] = useState(allContents["en"]);

  
  const changeLang = (lang) => {   
    setContent(allContents[lang.target.value]);
  };

  const changeTheme = (chosenTheme) => {
    setTheme(themeModes[chosenTheme.target.value]);
  };

  
/**
 * pass all contexts values and functions in individual providers
 *  so they can be used in all childern
 */
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
