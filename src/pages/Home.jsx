import { useContent } from "../contexts/ContentContext"
import { useTheme } from "../contexts/ThemeContext"
import { useState } from "react"
import { Link } from "react-router-dom"
import FlightDetails from "../components/FlightDetails/FlightDetails"

export default function Home() {
   
    const content = useContent()
    const { theme } = useTheme()

    const keys = {
        from:"",
        to:"",
        departDate:"",
        returnDate:"",
        travellers:"",
    }

    const[formData,setFormData]=useState(keys)
    
    const handleFormDate = (e) => {

        const inputName = e.target.name
        const inputValue = e.target.value
        formData[inputName] = inputValue
      
        setFormData(formData)
        
        
        console.log(formData)
    }

    return (
        <main>
            <h1>{content.welcome}</h1>
            <div className={`searchbar ${theme}`}>
                <input
                    onChange={handleFormDate}
                    name="from"
                    type="text" placeholder={content.from} />
                <input
                    onChange={handleFormDate}
                    name="to"
                    type="text" placeholder={content.to} />
                <input
                    onChange={handleFormDate}
                    name="departDate"
                    type="date" placeholder={content.depart} />
                <input
                    onChange={handleFormDate}
                    name="returnDate"
                    type="date" placeholder={content.return} />
                <input
                    onChange={handleFormDate}
                    name="travellers"
                    type="number" placeholder={content.travellers} />
            </div>
            
            <FlightDetails {...formData}/>
        </main>
    )
}

