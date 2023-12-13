const validateSpeciesName: (speciesName: string) => string[] = (
  speciesName
) => {
  const errorMessages = Array<string>();
  if (speciesName.length < 3 || speciesName.length > 23)
    errorMessages.push("Species Name: Must be between 3 and 23 characters");

  return errorMessages;
};

export default validateSpeciesName;
