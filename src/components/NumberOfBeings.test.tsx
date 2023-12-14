import { render, screen, fireEvent } from "@testing-library/react";
import NumberOfBeings from "./NumberOfBeings";

test("renders form element and displays numberOfBeing props", () => {
  render(
    <NumberOfBeings
      numberOfBeings="2"
      onChangeBeings={() => void {}}
      errorMessages={[]}
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
      errorMessages={[]}
    />
  );

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "10" } });
  expect(mockOnChange).toHaveBeenCalledWith("10");
});
