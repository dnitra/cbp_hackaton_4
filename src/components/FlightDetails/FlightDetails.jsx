import React, { useState, useEffect } from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";
import { DateTime } from "luxon";
import FlightCard from "../FlightCard/FlightCard";
import FlightCardReturn from "../FlightCardReturn/FlightCardReturn";
import { Link } from "react-router-dom";

export default function FlightDetails(props) {
  // props with flightDetails
  const content = useContent();
  const { theme } = useTheme();

  //props from home page

  let date = props.departDate.split("-");
  date = `${date[2]}/${date[1]}/${date[0]}`;
  // console.log(date)

  let returnDate = props.returnDate.split("-");
  returnDate = `${returnDate[2]}/${returnDate[1]}/${returnDate[0]}`;

  // console.log(returnDate)

  const [cityCodeFrom, setCityCodeFrom] = useState([]);
  const [cityCodeTo, setCityCodeTo] = useState([]);
  const [flights, setFlights] = useState([]);
  const [returnFlights, setReturnFlights] = useState([]);
  const [flightId, setFlightId] = useState(null);
  const [numPerson, setNumPerson] = useState(0);

  const loadCityCodeFrom = async () => {
    if (props.from) {
      const response = await fetch(
        `https://api.skypicker.com/locations?term=${props.from}&locale=en-US&location_types=airport&limit=50&active_only=true&sort=name`
      );
      const data = await response.json();

      // console.log(data.locations[0].code);
      if (data.locations[0]) setCityCodeFrom(data.locations[0].code);
    }
  };

  const loadCityCodeTo = async () => {
    if (props.to) {
      const response = await fetch(
        `https://api.skypicker.com/locations?term=${props.to}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`
      );
      const data = await response.json();

      setCityCodeTo(data.locations[0].code);
    }
  };

  const loadFlights = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=${cityCodeFrom}&fly_to=${cityCodeTo}&partner=data4youcbp202106&limit=10&date_from=${date}&date_to=${date}&sort=date&asc=1`
    );
    const data = await response.json();
    console.log(data.data);
    setFlights(data.data);
  };

  const loadReturnFlights = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=${cityCodeTo}&fly_to=${cityCodeFrom}&partner=data4youcbp202106&limit=10&date_from=${returnDate}&date_to=${returnDate}&sort=date&asc=1`
    );
    const data = await response.json();
    setReturnFlights(data.data);
  };

  const loadCarriers = async () => {
    const response = await fetch();
    const data = await response.json();
  };

  useEffect(() => {
    loadCityCodeFrom();
    loadCityCodeTo();
    setNumPerson(props.travellers);
  }, [props]);

  const goLoadData = () => {
    if (cityCodeFrom.length && cityCodeTo.length) {
      loadFlights();
      loadReturnFlights();
    }
  };
  // if(flightId) {
  //   return flightId

  // }
  return (
    <>
      <div>
        <button className="button-13" onClick={goLoadData}>
          Search
        </button>
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
                <FlightCardReturn
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
    </>
  );
}
