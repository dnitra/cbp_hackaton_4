import React from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./FlightDetails.scss";

export default function FlightDetails() {
  // props with flightDetails
  const content = useContent();
  const { theme } = useTheme();
  const flights = [
    {
      id: "145c07f04b7e0000a668305c_0|07f015274b7e0000b5733cf0_0",
      flyFrom: "PRG",
      flyTo: "VLC",
      cityFrom: "Prague",
      cityCodeFrom: "PRG",
      cityTo: "Valencia",
      cityCodeTo: "VLC",
      countryFrom: {
        code: "CZ",
        name: "Czechia",
      },
      countryTo: {
        code: "ES",
        name: "Spain",
      },
      dTime: 1669808700,
      dTimeUTC: 1669805100,
      aTime: 1669849200,
      aTimeUTC: 1669845600,
      nightsInDest: null,
      quality: 148.999745,
      distance: 1652.96,
      duration: {
        departure: 40500,
        return: 0,
        total: 40500,
      },
      fly_duration: "11h 15m",
      price: 47,
      conversion: {
        EUR: 47,
      },
      fare: {
        adults: 47,
        children: 47,
        infants: 47,
      },
      bags_price: {
        1: 80.768,
        2: 186.352,
      },
      baglimit: {
        hand_height: 40,
        hand_length: 55,
        hand_weight: 10,
        hand_width: 20,
        hold_dimensions_sum: 275,
        hold_height: 90,
        hold_length: 119,
        hold_weight: 15,
        hold_width: 66,
        personal_item_height: 25,
        personal_item_length: 40,
        personal_item_weight: 10,
        personal_item_width: 20,
      },
      availability: {
        seats: 2,
      },
      airlines: ["FR", "U2"],
      route: [
        {
          id: "145c07f04b7e0000a668305c_0",
          combination_id: "145c07f04b7e0000a668305c",
          flyFrom: "PRG",
          flyTo: "MXP",
          cityFrom: "Prague",
          cityCodeFrom: "PRG",
          cityTo: "Milan",
          cityCodeTo: "MIL",
          dTime: 1669808700,
          dTimeUTC: 1669805100,
          aTime: 1669813800,
          aTimeUTC: 1669810200,
          airline: "U2",
          flight_no: 2582,
          operating_carrier: "EC",
          operating_flight_no: "",
          fare_basis: "",
          fare_category: "M",
          fare_classes: "",
          fare_family: "",
          return: 0,
          latFrom: 50.1008333,
          lngFrom: 14.26,
          latTo: 45.63,
          lngTo: 8.72305556,
          mapIdfrom: "prague_cz",
          mapIdto: "milan_it",
          bags_recheck_required: false,
          vi_connection: false,
          guarantee: false,
          equipment: null,
          vehicle_type: "aircraft",
          original_return: 0,
        },
        {
          id: "07f015274b7e0000b5733cf0_0",
          combination_id: "07f015274b7e0000b5733cf0",
          flyFrom: "MXP",
          flyTo: "VLC",
          cityFrom: "Milan",
          cityCodeFrom: "MIL",
          cityTo: "Valencia",
          cityCodeTo: "VLC",
          dTime: 1669842300,
          dTimeUTC: 1669838700,
          aTime: 1669849200,
          aTimeUTC: 1669845600,
          airline: "FR",
          flight_no: 7470,
          operating_carrier: "",
          operating_flight_no: "",
          fare_basis: "",
          fare_category: "M",
          fare_classes: "",
          fare_family: "",
          return: 0,
          latFrom: 45.63,
          lngFrom: 8.72305556,
          latTo: 39.4894444,
          lngTo: -0.4816667,
          mapIdfrom: "milan_it",
          mapIdto: "valencia_es",
          bags_recheck_required: true,
          vi_connection: true,
          guarantee: true,
          equipment: null,
          vehicle_type: "aircraft",
          original_return: 0,
        },
      ],
      booking_token:
        "EEjnkZzPOY-58__81m3p1P_WmVu2xqanFLS88-cTqZ56Y2JB3DuJZMex3IqAoRUu3jrkjqmD4LDNa3N_niiFM1rPn5UI75j-P4MoQhh3H2XSqaBRZL9kUD8BeTjDVPja_ejDoMGkn3uowe7TQWjtM_SRYH0J2f_2quwjhThXz3lABQkSlwo_ROm_fzwz-8ISt9GoK1aj3GndznKRxwnf20J0D_wr1SSn8wDgmaiCIDOyPqqck9RTQIOGaL-Uag5OcYmJl1J38gDNodTT1oklDuRhmEKj5LKMdo9NNEdWxEYBDqmXHvTbzCVV_bh3aO7-y2FBq3PGSAui-e8IVnRPccX5F3ZyUtQEjXNZkhwMKxhnPcDpQXYYihXG49xIsD9MrYhi7bNC8CAWFcn2BdMCCX226jWV88LnNmNITLY-fhfZgCUG88x8pODkgviimeE4bFMFoKs9on_RpBMhmrDpVuC9iBfLJAfNQgIiM45J_XxhlvTJrl4yiNl3YTN__wpdVt9PSLL6Roip3gUz5_Yp2ZC955AO3UXkGIIzjjbwwS5o=",
      deep_link:
        "https://www.kiwi.com/deep?affilid=data4youcbp202106&currency=EUR&flightsId=145c07f04b7e0000a668305c_0%7C07f015274b7e0000b5733cf0_0&from=PRG&lang=en&passengers=1&to=VLC&booking_token=EEjnkZzPOY-58__81m3p1P_WmVu2xqanFLS88-cTqZ56Y2JB3DuJZMex3IqAoRUu3jrkjqmD4LDNa3N_niiFM1rPn5UI75j-P4MoQhh3H2XSqaBRZL9kUD8BeTjDVPja_ejDoMGkn3uowe7TQWjtM_SRYH0J2f_2quwjhThXz3lABQkSlwo_ROm_fzwz-8ISt9GoK1aj3GndznKRxwnf20J0D_wr1SSn8wDgmaiCIDOyPqqck9RTQIOGaL-Uag5OcYmJl1J38gDNodTT1oklDuRhmEKj5LKMdo9NNEdWxEYBDqmXHvTbzCVV_bh3aO7-y2FBq3PGSAui-e8IVnRPccX5F3ZyUtQEjXNZkhwMKxhnPcDpQXYYihXG49xIsD9MrYhi7bNC8CAWFcn2BdMCCX226jWV88LnNmNITLY-fhfZgCUG88x8pODkgviimeE4bFMFoKs9on_RpBMhmrDpVuC9iBfLJAfNQgIiM45J_XxhlvTJrl4yiNl3YTN__wpdVt9PSLL6Roip3gUz5_Yp2ZC955AO3UXkGIIzjjbwwS5o=",
      facilitated_booking_available: false,
      pnr_count: 2,
      has_airport_change: false,
      technical_stops: 0,
      throw_away_ticketing: false,
      hidden_city_ticketing: false,
      virtual_interlining: true,
      mapIdfrom: "prague_cz",
      mapIdto: "valencia_es",
    },
  ];

  return flights
    ? flights.map((flight) => {
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
    : null;
}
