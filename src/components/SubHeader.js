import { useTranslation } from "react-i18next";
import Section from "./Section";

export default function SubHeader() {
  const [t] = useTranslation();
  return (
    <Section>
      <h4 className="text-muted">{t("Subtitle")}</h4>
    </Section>
  );
}
