import React from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import "./FlightCard.scss";

export default function FlightCard({
  flight,
  arrivalTime,
  departureTime,
  date,
  setFlightId,
  numPerson,
}) {
  const content = useContent();
  const { theme } = useTheme();
  return (
    <div className="flight__first flight">
      <div className="flight__details">
        <div className="flight__details-date">
          <span>{content.flightDate}</span>
          {date}
        </div>
        <div className="flight__details-img">
        {flight.airlines.map((airlineCode) => {
          return (
            <img
              key={airlineCode}
              className="flight__details-logo"
              src={`https://images.kiwi.com/airlines/64/${airlineCode}.png`}
              alt="airline logo"
            />
          );
        })}
          </div>
        <div className="flight__details-from">
          <span>{content.flightFrom}</span>
          {flight.cityFrom}
        </div>
        <div className="flight__details-departure-time">
          <span>{content.flightTimeDep}</span>
          {departureTime}
        </div>
        <div className="flight__details-to">
          <span>{content.flightTo}</span>
          {flight.cityTo}
        </div>
        <div className="">
          <span>{content.flightTimeArr}</span>
          {arrivalTime}
        </div>
        <div className="flight__details-arrival-time"></div>
        <div className="flight__details-time-total">
          <span>{content.flightTimeTotal}</span>
          {flight.fly_duration}
        </div>
      </div>

      <div className="flight__price">
        <div className="flight__price-total">
          <span>{content.flightPrice}</span>
          {numPerson * flight.price}
          {Object.keys(flight.conversion)}
        </div>
      </div>
      <button className="button-13"
        onClick={() => {
          setFlightId(flight.id);
        }}
      >
        More details
      </button>
    </div>
  );
}
