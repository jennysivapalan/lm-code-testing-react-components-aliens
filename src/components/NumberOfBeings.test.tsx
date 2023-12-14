import { render, screen, fireEvent } from "@testing-library/react";
import NumberOfBeings from "./NumberOfBeings";
import validateNumberOfBeings from "../validate/validate_number_of_beings";

test("renders form element and displays numberOfBeing props", () => {
  render(
    <NumberOfBeings
      numberOfBeings="2"
      onChangeBeings={() => void {}}
      validateField={validateNumberOfBeings}
    />
  );

  const labelText = screen.getByLabelText(/Number Of Beings/i);
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("2");
  expect(inputText).toBeInTheDocument();
});

test("calls the onChange function in input with correct value", () => {
  const mockOnChange = jest.fn();
  render(
    <NumberOfBeings
      numberOfBeings="2"
      onChangeBeings={mockOnChange}
      validateField={validateNumberOfBeings}
    />
  );

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "10" } });
  expect(mockOnChange).toHaveBeenCalledWith("10");
});
