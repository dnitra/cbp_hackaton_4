import React from "react";
import FlightDetails from "../../components/FlightDetails/FlightDetails";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function SearchResults() {
  const content = useContent();
  const { theme } = useTheme();
  return <div className="results">{content.date}</div>;
}
