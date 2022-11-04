import { useLang } from "../contexts/LanguageContext";
import { lazy, Suspense } from "react";

export default function Content(key_word, page = "mainContent") {
  const { lang } = useLang();

  const data = lazy(async () => import(`${lang}/${page}.js`));

  return (    
    <Suspense fallback={null}>
      <>{data[key_word]}</>
    </Suspense>

  )
}
