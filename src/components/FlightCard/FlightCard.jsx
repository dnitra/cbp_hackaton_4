import React from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function FlightCard({
  flight,
  arrivalTime,
  departureTime,
  date,
  numPerson,
}) {
  const content = useContent();
  const { theme } = useTheme();
  return (
    <div className="flight__first flight" key={flight.id}>
      <div className="flight__details">
        <div className="flight__details-date">
          {content.flightDate}
          {date}
        </div>
        {flight.airlines.map((airlineCode) => {
          return (
            <img
              src={`https://images.kiwi.com/airlines/64/${airlineCode}.png`}
              alt="airline logo"
            />
          );
        })}

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
          {numPerson * flight.price}
          {Object.keys(flight.conversion)}
        </div>
      </div>
    </div>
  );
}
