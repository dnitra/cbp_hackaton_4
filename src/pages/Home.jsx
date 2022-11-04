import { useContent } from "../contexts/ContentContext";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";
import "./Home.scss";

import FlightDetails from "../components/FlightDetails/FlightDetails";

const keys = {
  from: "",
  to: "",
  departDate: "",
  returnDate: "",
  travellers: 1,
  returnFlight: false,
};
export default function Home() {
  const content = useContent();
  const { theme } = useTheme();

  const [formData, setFormData] = useState(keys);
  const [selected, setSelected] = useState(true);

  const handleFormDate = (e) => {
    const inputName = e.target.name;
    let inputValue = e.target.value;
    const newFormData = { ...formData };

    newFormData[inputName] = inputValue;

    if (inputName === "travellers") {
      const min = 1;
      const max = 10;
      inputValue = Math.max(min, Math.min(max, Number(e.target.value)));
    }

    const handleRadio = (e) => {
      selected ? setSelected(false) : setSelected(true);
      setFormData({ ...formData, returnFlight: selected });
    };

    setFormData(newFormData);
  };

  const handleRadio = (e) => {
    selected ? setSelected(false) : setSelected(true);
    setFormData({ ...formData, returnFlight: selected });
  };

  return (
    <main>
      <h1>{content.welcome}</h1>

      <div className="radio-buttons">
        <label htmlFor="oneWauFlight">One way</label>
        <input
          onChange={handleRadio}
          id="oneWayFlight"
          value=""
          name="returnFlight"
          className={` ${theme}`}
          type="radio"
          checked={selected}
        />

        <label htmlFor="returnFlight">Roundtrip</label>
        <input
          onChange={handleRadio}
          id="returnFlight"
          value="returnFlight"
          name="returnFlight"
          className={` ${theme}`}
          type="radio"
        />
      </div>

      <div className={`searchbar ${theme}`}>
        <input
          className="input-text"
          onChange={handleFormDate}
          name="from"
          type="text"
          placeholder={content.from}
        />
        <input
          className="input-text"
          onChange={handleFormDate}
          name="to"
          type="text"
          placeholder={content.to}
        />
        <div className="input-label">
          <label htmlFor="departureDate">{content.departure}</label>
          <input
            className="input-text"
            id="departureDate"
            onChange={handleFormDate}
            name="departDate"
            type="date"
          />
        </div>

        {!selected ? (
          <div className="input-label">
            <label htmlFor="returnDate">{content.returnDate} </label>
            <input
              className="input-text"
              onChange={handleFormDate}
              id="returnDate"
              name="returnDate"
              type="date"
              placeholder={content.return}
            />
          </div>
        ) : (
          ""
        )}

        <input
          className="input-text"
          onChange={handleFormDate}
          name="travellers"
          type="number"
          placeholder={`${content.travellers}: ${formData.travellers}`}
        />
      </div>

      <FlightDetails {...formData} />
    </main>
  );
}
