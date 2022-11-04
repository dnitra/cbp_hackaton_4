import React, { useState, useEffect } from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./FlightDetails.scss";
import { DateTime } from "luxon";

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

    setCityCodeFrom(data.locations[0].code);
  };

  const loadCityCodeTo = async () => {
    const response = await fetch(
      `https://api.skypicker.com/locations?term=valencia&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`
    );
    const data = await response.json();

    setCityCodeTo(data.locations[0].code);
  };

  const loadFlights = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=${cityCodeFrom}&fly_to=${cityCodeTo}&partner=data4youcbp202106&limit=10`
    );
    const data = await response.json();

    setFlights(data.data);
  };
  useEffect(() => {
    loadCityCodeFrom();
    loadCityCodeTo();
  }, []);

  useEffect(() => {
    if (cityCodeFrom.length && cityCodeTo.length) {
      loadFlights();
    }
  }, [cityCodeFrom, cityCodeTo]);

  return flights
    ? flights.map((flight) => {
        const departureTime = DateTime.fromMillis(flight.dTime * 1000).toFormat(
          "hh:mm"
        );
        const arrivalTime = DateTime.fromMillis(flight.aTime * 1000).toFormat(
          "hh:mm"
        );
        const date = DateTime.fromMillis(flight.dTime * 1000).toFormat("dd/MM");

        return (
          <div className="flight__first flight" key={flight.id}>
            <div className="flight__details">
              <div className="flight__details-date">
                {content.flightDate}
                {date}
              </div>
              <div className="flight__details-airline">
                {content.flightAirline}
                {flight.airlines?.[0]} {flight.airlines?.[1]}
              </div>
              <div className="flight__details-from">
                {content.flightFrom}
                {flight.cityFrom}
              </div>
              <div className="flight__details-departure-time">
                {content.flightTimeDep}
                {departureTime}
              </div>
              <div className="flight__details-to">
                {content.flightTo}
                {flight.cityTo}
              </div>
              <div className="">
                {content.flightTimeArr}
                {arrivalTime}
              </div>
              <div className="flight__details-arrival-time"></div>
              <div className="flight__details-time-total">
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
    : null;
}
