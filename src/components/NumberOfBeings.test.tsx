import { render, screen } from "@testing-library/react";
import NumberOfBeings from "./NumberOfBeings";

test("renders form element", () => {
  render(<NumberOfBeings numberOfBeings="2" onChangeBeings={() => void {}} />);

  const labelText = screen.getByLabelText(/Number Of Beings/i);
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("2");
  expect(inputText).toBeInTheDocument();
});
