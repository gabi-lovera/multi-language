import React from "react";
import Dropdown from "./Dropdown/Select";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

export default function Navbar() {
  const [t] = useTranslation();
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h1>{t("Navbar.brand")}</h1>
        <div className="d-flex">
          <h4 className="link">{t("Navbar.home")}</h4>
          <h4 className="link">{t("Navbar.about")}</h4>
          <h4 className="link">{t("Navbar.skill")}</h4>
          <h4 className="link">{t("Navbar.contact")}</h4>
        </div>
        <Dropdown />
      </div>
    </nav>
  );
}
