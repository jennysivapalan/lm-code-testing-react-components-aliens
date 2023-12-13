const LENGTH_ERROR = "Planet Name: Must be between 2 and 49 characters";

const validatePlanetName: (planetName: string) => string[] = (speciesName) => {
  const errorMessages = Array<string>();
  if (speciesName.length < 2 || speciesName.length > 49)
    errorMessages.push(LENGTH_ERROR);

  return errorMessages;
};

export default validatePlanetName;
