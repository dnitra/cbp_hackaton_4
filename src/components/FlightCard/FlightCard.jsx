import React from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";
// import { Link } from "react-router-dom";
import "./FlightCard.scss";

export default function FlightCard({
  // grabing the props passed from the FlightDetails
  flight,
  arrivalTime,
  departureTime,
  date,
  setFlightId,
  numPerson,
}) {
  //
  const content = useContent();
  const { theme } = useTheme();
  return (
    <div style={theme} className="flight__first flight" key={flight.id}>
      <div className="flight__details">
        <div className="flight__details-date">
          <span>{content.flightDate}</span>
          {date}
        </div>
        <div className="flight__details-img">
          {/* Mapping through the airlines to get all the logos */}
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
        <div className="flight__details-arrival-time">
          <span>{content.flightTimeArr}</span>
          {arrivalTime}
        </div>

        <div className="flight__details-time-total">
          <span>{content.flightTimeTotal}</span>
          {flight.fly_duration}
          {console.log(flight)}
        </div>
      </div>

      <div className="flight__price">
        <div className="flight__price-total">
          <span>{content.flightPrice}</span>
          {numPerson * flight.price}
          {Object.keys(flight.conversion)}
        </div>
      </div>
      <button
        className="button-13"
        onClick={() => {
          setFlightId(flight.id);
        }}
      >
        {content.more_details}
      </button>
    </div>
  );
}
