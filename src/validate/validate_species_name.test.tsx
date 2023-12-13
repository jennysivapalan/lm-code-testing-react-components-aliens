import validateSpeciesName from "./validate_species_name";

describe("validation rules for species name", () => {
  test("species name should be between 3 and 23", () => {
    const name = "hello world";
    expect(validateSpeciesName(name)).toEqual([]);
  });

  test("species name should return error message if characteres outside of 3 to 23", () => {
    const smallWord = "to";
    expect(validateSpeciesName(smallWord)).toEqual([
      "Species Name: Must be between 3 and 23 characters",
    ]);

    const longWord = Array(24).fill("a");
    expect(validateSpeciesName(longWord.join(""))).toEqual([
      "Species Name: Must be between 3 and 23 characters",
    ]);
  });
});
