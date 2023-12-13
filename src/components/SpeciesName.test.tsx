import { render, screen, fireEvent } from "@testing-library/react";
import SpeciesName from "./SpeciesName";
import ErrorMessages from "./ErrorMessages";

test("renders form element and displays speciesName props", () => {
  render(
    <SpeciesName
      speciesName="humans"
      onChangeSpeciesName={() => void {}}
      errorMessages={[]}
    />
  );

  const labelText = screen.getByLabelText(/Species Name/i);
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("humans");
  expect(inputText).toBeInTheDocument();
});

test("calls the onChange function in input with correct value", () => {
  const mockOnChange = jest.fn();

  render(
    <SpeciesName
      speciesName="humans"
      onChangeSpeciesName={mockOnChange}
      errorMessages={[]}
    />
  );

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Blue Whale" } });
  expect(mockOnChange).toHaveBeenCalledWith("Blue Whale");
});
