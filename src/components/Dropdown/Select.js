import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { options } from "./options";
import { useTranslation } from "react-i18next";
import "./Select.css";

export default function Select() {
  const [, i18n] = useTranslation();
  return (
    <div className="container-drop d-flex">
      <div className="dropdown">
        <Dropdown
          data-testid="select-language"
          options={options}
          onChange={(e) => {
            i18n.changeLanguage(e.value);
          }}
          value={i18n.language}
        />
      </div>
    </div>
  );
}
