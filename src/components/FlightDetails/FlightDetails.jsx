import React, { useState, useEffect } from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";
import { DateTime } from "luxon";
import FlightCard from "../FlightCard/FlightCard";

export default function FlightDetails(props) {
  // props with flightDetails
  const content = useContent();
  const { theme } = useTheme();

  //props from home page

  let date = props.departDate.split("-");

  date = `${date[2]}/${date[1]}/${date[0]}`;

  const [cityCodeFrom, setCityCodeFrom] = useState([]);
  const [cityCodeTo, setCityCodeTo] = useState([]);
  const [flights, setFlights] = useState([]);

  const loadCityCodeFrom = async () => {
    const response = await fetch(
      `https://api.skypicker.com/locations?term=${props.from}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`
    );
    const data = await response.json();

    // console.log(data.locations[0].code);
    if (data.locations[0]) setCityCodeFrom(data.locations[0].code);
  };

  const loadCityCodeTo = async () => {
    const response = await fetch(
      `https://api.skypicker.com/locations?term=${props.to}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`
    );
    const data = await response.json();
    if (data.locations[0]) setCityCodeTo(data.locations[0].code);
  };

  const loadFlights = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=${cityCodeFrom}&fly_to=${cityCodeTo}&partner=data4youcbp202106&limit=10&date_from=${date}`
    );
    const data = await response.json();

    setFlights(data.data);
  };
  useEffect(() => {
    loadCityCodeFrom();
    loadCityCodeTo();
  }, [props]);

  const goLoadData = () => {
    if (cityCodeFrom.length && cityCodeTo.length) {
      loadFlights();
    }
  };

  return (
    <>
      <div>
        <button onClick={goLoadData}>Search</button>
      </div>

      <div>
        {flights
          ? flights.map((flight) => {
              const departureTime = DateTime.fromMillis(
                flight.dTime * 1000
              ).toFormat("hh:mm");
              const arrivalTime = DateTime.fromMillis(
                flight.aTime * 1000
              ).toFormat("hh:mm");
              const date = DateTime.fromMillis(flight.dTime * 1000).toFormat(
                "dd/MM"
              );

              return (
                <FlightCard
                  flight={flight}
                  arrivalTime={arrivalTime}
                  departureTime={departureTime}
                  date={date}
                />
              );
            })
          : null}
      </div>
    </>
  );
}
