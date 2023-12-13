const LENGTH_ERROR = "Planet Name: Must be between 2 and 49 characters";
const CHARACTER_ERROR = "Planet Name: No special characters allowed";

const validatePlanetName: (planetName: string) => string[] = (speciesName) => {
  const errorMessages = Array<string>();
  if (speciesName.length < 2 || speciesName.length > 49)
    errorMessages.push(LENGTH_ERROR);
  if (speciesName.match("[^a-zA-Z0-9 ]")) errorMessages.push(CHARACTER_ERROR);
  return errorMessages;
};

export default validatePlanetName;
