import React, { useState, useEffect } from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./FlightDetails.scss";

export default function FlightDetails() {
  // props with flightDetails
  const content = useContent();
  const { theme } = useTheme();

  const [cityCodeFrom, setCityCodeFrom] = useState([]);
  const [cityCodeTo, setCityCodeTo] = useState([]);
  const [flights, setFlights] = useState([]);

  const loadCityCodeFrom = async () => {
    const response = await fetch(
      `https://api.skypicker.com/locations?term=prague&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`
    );
    const data = await response.json();
    console.log(data.locations[0].code);
    setCityCodeFrom(data.locations[0].code);
  };

  const loadCityCodeTo = async () => {
    const response = await fetch(
      `https://api.skypicker.com/locations?term=valencia&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`
    );
    const data = await response.json();
    console.log(data.locations[0].code);
    setCityCodeTo(data.locations[0].code);
  };

  const loadFlights = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=${cityCodeFrom}&fly_to=${cityCodeTo}&partner=data4youcbp202106&limit=10&date_from=05/11/2022`
    );
    const data = await response.json();
    console.log(data);
    setFlights(data.data);
  };
  useEffect(() => {
    loadCityCodeFrom();
    loadCityCodeTo();
  }, []);

  const goLoadData = () => {
    if (cityCodeFrom.length && cityCodeTo.length) {
      loadFlights();
    }
  }

  return( 
    <>
    <div>
      <button onClick={goLoadData}>Search</button>
    </div>
    <div>
      {flights ? flights.map((flight) => {
        return (
          <div className="flight" key={flight.id}>
            <div className="flight__details">
              <div className="flight__details-date">{content.flightDate}</div>
              <div className="flight__details-airline">
                {content.flightAirline}
                {flight.airlines?.[0]}
              </div>
              <div className="flight__details-from">
                {content.flightFrom}
                {flight.cityFrom}
              </div>
              <div className="flight__details-airline">
                {content.flightAirline}
                {flight.airlines?.[1]}
              </div>
              <div className="flight__details-to">
                {content.flightTo}
                {flight.cityTo}
              </div>
              <div className="flight__details-time">
                {content.flightTimeTotal}
                {flight.fly_duration}
              </div>
            </div>

            <div className="flight__price">
              <div className="flight__price-total">
                {content.flightPrice}
                {flight.price}
                {Object.keys(flight.conversion)}
              </div>
            </div>
          </div>
        );
      })
    : null}
    </div>
    </>)
}
