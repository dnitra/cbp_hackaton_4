import React from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function FlightDetails() {
  const content = useContent();
  const { theme } = useTheme();
  return <div>FlightDetails</div>;
}
