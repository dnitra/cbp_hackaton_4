import React, { useState, useEffect } from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function FlightDetails() {
  const content = useContent();
  const { theme } = useTheme();

  const [cityCodeFrom, setCityCodeFrom] = useState([])
  const [cityCodeTo, setCityCodeTo] = useState([])
  const [flights, setFlights] = useState([])

  const loadCityCodeFrom = async() => {
    const response = await fetch(`https://api.skypicker.com/locations?term=prague&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`)
    const data = await response.json()
    console.log(data.locations[0].code)
    setCityCodeFrom(data.locations[0].code)
  }

  const loadCityCodeTo = async() => {
    const response = await fetch(`https://api.skypicker.com/locations?term=valencia&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`)
    const data = await response.json()
    console.log(data.locations[0].code)
    setCityCodeTo(data.locations[0].code)
  }


  const loadFlights = async() => {
    const response = await fetch(`https://api.skypicker.com/flights?fly_from=${cityCodeFrom}&fly_to=${cityCodeTo}&partner=data4youcbp202106&limit=10`)
    const data = await response.json()
    console.log(data)
    setFlights(data)
  }
  useEffect(() => {
    loadCityCodeFrom()
    loadCityCodeTo()
  }, [])

  useEffect(() => {
   
    if(cityCodeFrom.length && cityCodeTo.length) {
      loadFlights()

    }
  }, [cityCodeFrom, cityCodeTo])
  
  


  return <div>
    
  </div>;
}
