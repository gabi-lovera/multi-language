import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { I18nextProvider } from "react-i18next";
import i18n from "../inConfig";
import Flag from "react-flagkit";

beforeEach(() => {
  render(
    <I18nextProvider i18n={i18n}>
      <Navbar />
    </I18nextProvider>
  );
});

describe("When the navbar is rendered", () => {
  test("Should exist the navbar brand", () => {
    screen.debug();
    expect(screen.getByRole("heading", { name: /navbar/i }));
  });
  test("Should show the links for the navigation", () => {
    expect(screen.getByRole("heading", { name: "Home" }));
    expect(screen.getByRole("heading", { name: "About" }));
    expect(screen.getByRole("heading", { name: "Skill" }));
    expect(screen.getByRole("heading", { name: "Contact" }));
  });
});
/*Doesn´t work because the dropdown is not a select*/
describe("When interacted with the dropdown", () => {
  test("Should see available languages when press the select", () => {
    fireEvent.click(screen.getByTestId("select-language"));
    const options = screen.getAllByTestId("select-option");
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });
  test("Should change language when click other flag", () => {
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: <Flag country="AR" size={40} /> },
    });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
    expect(screen.getByRole("heading", { name: "Inicio" }));
    expect(screen.getByRole("heading", { name: "Acerca" }));
    expect(screen.getByRole("heading", { name: "Habilidades" }));
    expect(screen.getByRole("heading", { name: "Contactos" }));
  });
});
