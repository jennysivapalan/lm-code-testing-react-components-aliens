import { render, screen } from "@testing-library/react";
import SpeciesName from "./SpeciesName";

test("renders form element", () => {
  render(
    <SpeciesName speciesName="humans" onChangeSpeciesName={() => void {}} />
  );

  const labelText = screen.getByLabelText(/Species Name/i);
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("humans");
  expect(inputText).toBeInTheDocument();
});
