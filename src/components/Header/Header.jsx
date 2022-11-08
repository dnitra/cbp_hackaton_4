import "./Header.scss";
import { Link } from "react-router-dom";
import { useLang } from "../../contexts/LanguageContext";
import { useContent } from "../../contexts/ContentContext";

export default function Header() {
  const { changeLang } = useLang();
  const content = useContent();

  return (
    <header>
      <nav>
        <Link to="/">{content.home}</Link>
        <Link to="/register">{content.register}</Link>
      </nav>

      <select onChange={changeLang}>
        <option value="en">EN</option>
        <option value="cs">CZ</option>
      </select>
    </header>
  );
}
