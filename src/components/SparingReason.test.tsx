import { render, screen } from "@testing-library/react";
import SparingReason from "./SparingReason";
test("renders form element", () => {
  render(
    <SparingReason
      sparingReason="Life is good!"
      onChangeSparingReason={() => void {}}
    />
  );

  const labelText = screen.getByLabelText("Reason for Sparing");
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("Life is good!");
  expect(inputText).toBeInTheDocument();
});
