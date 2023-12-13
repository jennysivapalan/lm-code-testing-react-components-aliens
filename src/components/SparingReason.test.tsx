import { render, screen, fireEvent } from "@testing-library/react";
import SparingReason from "./SparingReason";
test("renders form element and displays sparingReason props", () => {
  render(
    <SparingReason
      sparingReason="Life is good!"
      onChangeSparingReason={() => void {}}
      errorMessages={[]}
    />
  );

  const labelText = screen.getByLabelText("Reason for Sparing");
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("Life is good!");
  expect(inputText).toBeInTheDocument();
});

test("calls the onChange function in input with correct value", () => {
  const mockOnChange = jest.fn();

  render(
    <SparingReason
      sparingReason="Life is good!"
      onChangeSparingReason={mockOnChange}
      errorMessages={[]}
    />
  );
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Yes it is" } });
  expect(mockOnChange).toHaveBeenCalledWith("Yes it is");
});
