import { useContent } from "../contexts/ContentContext";
import { useTheme } from "../contexts/ThemeContext";
export default function Home() {
  const content = useContent();
  const { theme } = useTheme();

  return (
    <main>
      {content.welcome}
      <div className={theme}>{content.search}</div>
    </main>
  );
}
