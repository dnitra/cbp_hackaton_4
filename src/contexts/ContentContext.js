import { createContext, useContext } from "react";

//create content context 
export const ContentContext = createContext();

//create custom hook which will return the values  from Content context
//this way we don't have to import the use Context and COntent context but just the hook
export function useContent() {

  return useContext(ContentContext);
}
