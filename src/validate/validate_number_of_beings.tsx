const CHARACTER_ERROR = "Number of beings: Numbers ONLY please";

const validateNumberOfBeings: (speciesName: string) => string[] = (
  speciesName
) => {
  const errorMessages = Array<string>();

  if (speciesName.match("[^0-9]")) errorMessages.push(CHARACTER_ERROR);
  return errorMessages;
};

export default validateNumberOfBeings;
