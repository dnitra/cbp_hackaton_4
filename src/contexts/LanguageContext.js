import { createContext, useContext } from "react";

//create LanguageContext
export const LanguageContext = createContext()


//create custom hook which will return the values  from Language context
//this way we don't have to import the useContext and Language context but just the hook
export function useLang() {
    
    return useContext(LanguageContext)
}