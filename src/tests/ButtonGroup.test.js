import { render, screen, fireEvent } from "@testing-library/react";
import ButtonGroup from "../components/ButtonGroup";
import { I18nextProvider } from "react-i18next";
import i18n from "../inConfig";

function ButtonProvided() {
  return (
    <I18nextProvider i18n={i18n}>
      <ButtonGroup />
    </I18nextProvider>
  );
}
beforeEach(() => {
  render(<ButtonProvided />);
});

describe("When the buttongroup is mount", () => {
  test("Should show the buttons in english language", () => {
    expect(screen.getByRole("button", { name: /spanish/i }));
    expect(screen.getByRole("button", { name: /english/i }));
  });
});
describe("When interacted with the buttons", () => {
  test("Should change language when click the buttons", () => {
    const ButtonSpanish = screen.getByRole("button", { name: /spanish/i });
    fireEvent.click(ButtonSpanish);
    expect(screen.getByRole("button", { name: /español/i }));
    expect(screen.getByRole("button", { name: /inglés/i }));
    const ButtonEnglish = screen.getByRole("button", { name: /inglés/i });
    fireEvent.click(ButtonEnglish);
    expect(screen.getByRole("button", { name: /spanish/i }));
    expect(screen.getByRole("button", { name: /english/i }));
  });
});
