import { ThemeContext } from "./ThemeContext"
import { LanguageContext } from "./LanguageContext"
import { ContentContext } from "./ContentContext"

import { useState } from "react"

import { mainContent as enMainContent } from "../content/en/mainContent"
import { mainContent as csMainContent } from "../content/cs/mainContent"




export function ContextsProvider({ children }) {


    const allContents = {
        "en": {
            "mainContent":enMainContent
        },
        "cs": {
            "mainContent":csMainContent
        }
    }


    const [lang,setLang] = useState("en")
    const [theme, setTheme] = useState("light-theme")
    const [content, setContent] = useState(allContents[lang]["mainContent"])

    


    const changeLang = (chosenLanguage) => {
        setLang(chosenLanguage)
        setContent(allContents[lang]["mainContent"])
    }

    const changeTheme = (chosenTheme) => {
        setTheme(chosenTheme)
    }

  
    
    return (
        <ContentContext.Provider value={content}>
            <LanguageContext.Provider value={{lang,changeLang}}>
                <ThemeContext.Provider value={{ theme, changeTheme }}>
                    {children}
                </ThemeContext.Provider>
            </LanguageContext.Provider>
        </ContentContext.Provider>
    )
}

