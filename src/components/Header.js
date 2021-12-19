import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const [t] = useTranslation();
  return (
    <div className="text-center mt-5">
      <h1 className="txt-header">{t("Welcome")}</h1> <br />
      <h1 className="txt-header">{t("Portfolio")}</h1>
    </div>
  );
}
