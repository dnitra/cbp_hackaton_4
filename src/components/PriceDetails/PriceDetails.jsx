import React from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function PriceDetails() {
  const content = useContent();
  const { theme } = useTheme();
  return <div>PriceDetails</div>;
}
