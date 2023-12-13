import validatePlanetName from "./validate_planet_name";

const LENGTH_ERROR = "Planet Name: Must be between 2 and 49 characters";

describe("valid planet name", () => {
  test("planet name should be valid", () => {
    expect(validatePlanetName("mars")).toEqual([]);

    expect(validatePlanetName("mars venus")).toEqual([]);
  });
});
describe("validation for number of characters", () => {
  test("planet name should return error message if characteres outside of 2 to 49", () => {
    const smallWord = "m";
    expect(validatePlanetName(smallWord)).toEqual([LENGTH_ERROR]);

    const longWord = Array(50).fill("b");
    expect(validatePlanetName(longWord.join(""))).toEqual([LENGTH_ERROR]);
  });
});
