import { render, screen, fireEvent } from "@testing-library/react";
import PlanetName from "./PlanetName";
import validatePlanetName from "../validate/validate_planet_name";

test("renders form element and displays planetName props", () => {
  render(
    <PlanetName
      planetName="mars"
      onChangePlanetName={() => void {}}
      validateField={validatePlanetName}
    />
  );

  const labelText = screen.getByLabelText(/Planet Name/i);
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("mars");
  expect(inputText).toBeInTheDocument();
});

test("calls the onChange function in input with correct value", () => {
  const mockOnChange = jest.fn();

  render(
    <PlanetName
      planetName="mars"
      onChangePlanetName={mockOnChange}
      validateField={validatePlanetName}
    />
  );

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Earth" } });
  expect(mockOnChange).toHaveBeenCalledWith("Earth");
});
