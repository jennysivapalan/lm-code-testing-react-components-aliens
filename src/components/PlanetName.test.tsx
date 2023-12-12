import { render, screen } from "@testing-library/react";
import PlanetName from "./PlanetName";

test("renders form element", () => {
  render(<PlanetName planetName="mars" onChangePlanetName={() => void {}} />);

  const labelText = screen.getByLabelText(/Planet Name/i);
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("mars");
  expect(inputText).toBeInTheDocument();
});
