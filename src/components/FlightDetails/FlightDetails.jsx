import React, { useState, useEffect } from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";
import { DateTime } from "luxon";
import FlightCard from "../FlightCard/FlightCard";
import "../FlightCard/FlightCard.scss";

export default function FlightDetails(props) {
  // props with flightDetails
  const content = useContent();
  const { theme } = useTheme();

  //props from home page
  // date format settings
  let date = props.departDate.split("-");
  date = `${date[2]}/${date[1]}/${date[0]}`;

  let returnDate = props.returnDate.split("-");
  returnDate = `${returnDate[2]}/${returnDate[1]}/${returnDate[0]}`;

  // neccesary states
  const [cityCodeFrom, setCityCodeFrom] = useState([]);
  const [cityCodeTo, setCityCodeTo] = useState([]);
  const [flights, setFlights] = useState([]);
  const [returnFlights, setReturnFlights] = useState([]);
  const [flightId, setFlightId] = useState(null);
  const [numPerson, setNumPerson] = useState(0);

  // Translate a city name into a city code - 'to' input
  const loadCityCodeFrom = async () => {
    if (props.from) {
      const response = await fetch(
        `https://api.skypicker.com/locations?term=${props.from}&locale=en-US&location_types=airport&limit=50&active_only=true&sort=name`
      );
      const data = await response.json();

      if (data.locations[0]) setCityCodeFrom(data.locations[0].code);
    }
  };

  // Translate a city name into a city code - 'from' input
  const loadCityCodeTo = async () => {
    if (props.to) {
      const response = await fetch(
        `https://api.skypicker.com/locations?term=${props.to}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`
      );
      const data = await response.json();

      setCityCodeTo(data.locations[0].code);
    }
  };

  // Get data for the flights
  const loadFlights = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=${cityCodeFrom}&fly_to=${cityCodeTo}&partner=data4youcbp202106&limit=10&date_from=${date}&date_to=${date}&sort=date&asc=1`
    );
    const data = await response.json();
    // save data into state
    setFlights(data.data);
  };
  // Get data for the return flights
  const loadReturnFlights = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=${cityCodeTo}&fly_to=${cityCodeFrom}&partner=data4youcbp202106&limit=10&date_from=${returnDate}&date_to=${returnDate}&sort=date&asc=1`
    );
    const data = await response.json();
    // save data into state
    setReturnFlights(data.data);
  };

  // when props changes -> run the functions again
  useEffect(() => {
    loadCityCodeFrom();
    loadCityCodeTo();
    setNumPerson(props.travellers);
  }, [props]);

  // after clicking on the search button load flight data
  const goLoadData = () => {
    if (cityCodeFrom.length && cityCodeTo.length) {
      loadFlights();
      loadReturnFlights();
    }
  };

  return (
    <>
      <div>
        <button className="button-13" onClick={goLoadData}>
          {content.searchButton}
        </button>
      </div>

      <div className="allFlights">
        <div>
          {/* if data for the flights exist, then map through flights*/}
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
                    // passing props to the flightcard
                    flight={flight}
                    arrivalTime={arrivalTime}
                    departureTime={departureTime}
                    date={date}
                    setFlightId={setFlightId}
                    numPerson={numPerson}
                    key={flight.id}
                  />
                );
              })
            : null}
        </div>

        <div>
          {returnFlights
            ? returnFlights.map((returnFlight) => {
                const departureTimeReturn = DateTime.fromMillis(
                  returnFlight.dTime * 1000
                ).toFormat("hh:mm");
                const arrivalTimeReturn = DateTime.fromMillis(
                  returnFlight.aTime * 1000
                ).toFormat("hh:mm");
                const dateReturn = DateTime.fromMillis(
                  returnFlight.dTime * 1000
                ).toFormat("dd/MM");

                return (
                  <FlightCard
                    flight={returnFlight}
                    arrivalTime={arrivalTimeReturn}
                    departureTime={departureTimeReturn}
                    date={dateReturn}
                    setFlightId={setFlightId}
                    numPerson={numPerson}
                    key={returnFlight.id}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
