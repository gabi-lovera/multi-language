import Section from "./Section";
import { useTranslation } from "react-i18next";
import "./Image.css";

export default function Image() {
  const [, i18n] = useTranslation();
  const imageName = () => {
    switch (i18n.language) {
      case "es":
        return "argentina.png";
      case "en":
        return "united-states.png";
      case "fr":
        return "france.png";
      default:
        return "united-states.png";
    }
  };
  return (
    <Section>
      <img
        className="image-language"
        alt="language"
        src={`./images/${imageName()}`}
      />
    </Section>
  );
}
