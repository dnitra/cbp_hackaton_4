import "./Header.scss";
import { Link } from "react-router-dom";
import { useLang } from "../../contexts/LanguageContext";
import { useContent } from "../../contexts/ContentContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  /**
   * deconstruct the values provided by contexts providerds
   */

  //changeLang is a function to change between languages
  const { changeLang } = useLang();
  const content = useContent();

  //changeTheme is a function to change between themes
  const { theme, changeTheme } = useTheme();

  return (
    <header style={theme}>
      <nav style={theme}>
        <Link style={theme} to="/">
          {content.home}
        </Link>
        <Link style={theme} to="/register">
          {content.register}
        </Link>
      </nav>
      <div style={theme} className="settings">
        <select style={theme} onChange={changeLang}>
          <option value="en">EN</option>
          <option value="cs">CZ</option>
        </select>

        <select style={theme} onChange={changeTheme}>
          <option value="lightTheme">Light-mode</option>
          <option value="darkTheme">Dark-mode</option>
        </select>
      </div>
    </header>
  );
}
