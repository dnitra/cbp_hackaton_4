import React from "react";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function SearchBar() {
  const content = useContent();
  const { theme } = useTheme();
  return <div>SearchBar</div>;
}
