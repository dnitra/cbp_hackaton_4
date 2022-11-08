import { useContent } from "../contexts/ContentContext";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";
import "./Home.scss";

import FlightDetails from "../components/FlightDetails/FlightDetails";

/**
 * prepare the object containing all form input names
 * use this object as the default value for useStateHook
 */
const keys = {
  from: "",
  to: "",
  departDate: "",
  returnDate: "",
  travellers: 1,
  returnFlight: false,
};

export default function Home() {
  /**
   * deconstruct object values from context providers
   *
   * content contains all content in chosen language
   * theme contains styling
   */
  const content = useContent();
  const { theme } = useTheme();

  //use one state for all form data
  const [formData, setFormData] = useState(keys);

  //useState for radiobutton
  const [selected, setSelected] = useState(true);

  /**
   * create one function to handle all inputs
   */
  const handleFormDate = (e) => {
    /**
     * take the name from event variable and use it as the key name from the
     * form data object
     */

    const inputName = e.target.name;
    let inputValue = e.target.value;

    //create new object and populate it with the formaData state
    const newFormData = { ...formData };

    //change the newly created object key and value from the input name and value
    newFormData[inputName] = inputValue;

    //set the formData state to be equal to modifed object
    setFormData(newFormData);
  };

  //switch between states of the radion buttons
  const handleRadio = () => {
    selected ? setSelected(false) : setSelected(true);
    setFormData({ ...formData, returnFlight: selected });
  };

  return (
    <main style={theme}>
      <h1>{content.welcome}</h1>

      <div className="radio-buttons">
        <label htmlFor="oneWayFlight">{content.one_way_label}</label>
        <input
          onChange={handleRadio}
          id="oneWayFlight"
          value=""
          name="returnFlight"
          className={` ${theme}`}
          type="radio"
          checked={selected}
        />

        <label htmlFor="returnFlight">{content.return_flight_label}</label>
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
