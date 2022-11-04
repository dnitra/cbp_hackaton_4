import { useContent } from "../contexts/ContentContext"
import { useTheme } from "../contexts/ThemeContext"
import { useState, useEffect } from "react"
import "./Home.scss"

import FlightDetails from "../components/FlightDetails/FlightDetails"

const keys = {
    from:"",
    to:"",
    departDate:"",
    returnDate:"",
    travellers: 1,
    returnFlight:false
}
export default function Home() {
  
    const content = useContent()
    const { theme } = useTheme()


  const [formData, setFormData] = useState(keys)
  const [selected,setSelected] =useState(true)

  
    
  const handleFormDate = (e) => {
      console.log(e.target)
        const inputName = e.target.name
        let inputValue = e.target.value
        const newFormData = { ...formData }
        
    
      newFormData[inputName] = inputValue
      
    if (inputName === "travellers") {
      const min = 1;
      const max = 10;
        inputValue = Math.max(min, Math.min(max, Number(e.target.value)));
      }
    
      setFormData(newFormData)
      
    }
    
    const handleRadio = (e) => {
      
      selected ?
      setSelected(false)
      :setSelected(true)
      setFormData({...formData, returnFlight: selected})
      
    }
  
  console.log(formData)

    return (
        <main>
        <h1>{content.welcome}</h1>
        <label htmlFor="oneWauFlight">one-way-flight</label>
        <input
          onChange={handleRadio}
          id="oneWayFlight" value=""
          name="returnFlight"
          className={`searchbar ${theme}`}
          type="radio"
          checked={selected}
          
        />
        <label htmlFor="returnFlight">return-flight</label>
        <input onChange={handleRadio}
          id="returnFlight"
          value="returnFlight"
          name="returnFlight"
          className={`searchbar ${theme}`}
          type="radio" />
        
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
                  type="number" placeholder={content.travellers}
                  value={1}
                        
                  />
            </div>
            
            <FlightDetails {...formData}/>
        </main>
    )
}
