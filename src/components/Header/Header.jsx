
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useLang } from "../../contexts/LanguageContext"
export default function Header() {
  
    const { changeLang, lang } = useLang()
    

    // const [jazyk,nastavJazyk]= useState("en")
    
    const handleLang = (e) => {
        
        changeLang(e.target.value)
    }
    
    useEffect(() => {
        changeLang(lang)
    },[])
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
            </nav>

            <select
                onClick={handleLang}
                name="lang"
                id="lang">
                <option> cs </option>
                <option> en</option>
                
            </select>
        </header>
    )
}