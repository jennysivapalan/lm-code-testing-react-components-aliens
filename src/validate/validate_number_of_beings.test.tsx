import validateNumberOfBeings from "./validate_number_of_beings";

const CHARACTER_ERROR = "Number of beings: Numbers ONLY please";

describe("valid number of beings", () => {
  test("number of beings should be valid", () => {
    expect(validateNumberOfBeings("2")).toEqual([]);

    expect(validateNumberOfBeings("20003")).toEqual([]);
  });
});

describe("validation for special characters and numbers", () => {
  test("species name should not special characters or alphabet characters", () => {
    expect(validateNumberOfBeings("hello world")).toEqual([CHARACTER_ERROR]);

    expect(validateNumberOfBeings("hellooooo3Me")).toEqual([CHARACTER_ERROR]);

    expect(validateNumberOfBeings("not @llowed o£k")).toEqual([
      CHARACTER_ERROR,
    ]);
  });
});
