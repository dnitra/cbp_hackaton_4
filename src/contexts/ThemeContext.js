import { createContext, useContext } from "react";


//create theme context
export const ThemeContext = createContext()

//create custom hook which will return the values  from Theme context
//this way we don't have to import the useContext and Theme context but just the hook
export function useTheme() {
    return useContext(ThemeContext)
}

