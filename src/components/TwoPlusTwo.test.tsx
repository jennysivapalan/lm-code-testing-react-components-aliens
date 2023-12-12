import { render, screen } from "@testing-library/react";
import TwoPlusTwo from "./TwoPlusTwo";
test("renders form element", () => {
  render(
    <TwoPlusTwo twoPlusTwoValue="4" onChangeTwoPlusTwoValue={() => void {}} />
  );

  const labelText = screen.getByLabelText("What is 2 + 2?");
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("4");
  expect(inputText).toBeInTheDocument();
});
