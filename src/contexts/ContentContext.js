import { createContext, useContext } from "react";
import { useEffect } from "react";

export const ContentContext = createContext();


export function useContent() {

  return useContext(ContentContext);
}
