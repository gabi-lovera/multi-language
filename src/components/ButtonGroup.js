import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";
import "./ButtonGroup.css";

export default function ButtonGroup() {
  const [t, i18n] = useTranslation();
  return (
    <Section>
      <button
        className="btn-change-lg"
        onClick={() => i18n.changeLanguage("es")}
      >
        <h5>{t("Button.spanish")}</h5>
      </button>
      <button
        className="btn-change-lg"
        onClick={() => i18n.changeLanguage("en")}
      >
        <h5>{t("Button.english")}</h5>
      </button>
    </Section>
  );
}
