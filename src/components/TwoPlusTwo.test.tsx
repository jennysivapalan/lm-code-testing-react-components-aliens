import { render, screen, fireEvent } from "@testing-library/react";
import TwoPlusTwo from "./TwoPlusTwo";
import validateTwoPlusTwo from "../validate/validate_two_plus_two";
test("renders form element and displays twoPlusTwoValue props", () => {
  render(
    <TwoPlusTwo
      twoPlusTwoValue="4"
      onChangeTwoPlusTwoValue={() => void {}}
      validateField={validateTwoPlusTwo}
    />
  );

  const labelText = screen.getByLabelText("What is 2 + 2?");
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("4");
  expect(inputText).toBeInTheDocument();
});

describe("onChange functionality", () => {
  test("calls the onChange function in input with correct value", () => {
    const mockOnChange = jest.fn();

    render(
      <TwoPlusTwo
        twoPlusTwoValue="4"
        onChangeTwoPlusTwoValue={mockOnChange}
        validateField={validateTwoPlusTwo}
      />
    );
    const input = screen.getByLabelText("What is 2 + 2?");
    fireEvent.change(input, { target: { value: "not-4" } });
    expect(mockOnChange).toHaveBeenCalledWith("not-4");
  });

  test("calls the onChange function ignores values not in the option list", () => {
    const mockOnChange = jest.fn();

    render(
      <TwoPlusTwo
        twoPlusTwoValue="4"
        onChangeTwoPlusTwoValue={mockOnChange}
        validateField={validateTwoPlusTwo}
      />
    );
    const input = screen.getByLabelText("What is 2 + 2?");
    fireEvent.change(input, { target: { value: "42" } });
    expect(mockOnChange).toHaveBeenCalledWith("");
  });
});
