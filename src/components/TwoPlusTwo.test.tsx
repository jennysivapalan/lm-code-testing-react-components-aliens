import { render, screen, fireEvent } from "@testing-library/react";
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

test("calls the onChange function in input with correct value", () => {
  const mockOnChange = jest.fn();

  render(
    <TwoPlusTwo twoPlusTwoValue="4" onChangeTwoPlusTwoValue={mockOnChange} />
  );
  const input = screen.getByLabelText("What is 2 + 2?");
  fireEvent.change(input, { target: { value: "not-4" } });
  expect(mockOnChange).toHaveBeenCalledWith("not-4");
});
