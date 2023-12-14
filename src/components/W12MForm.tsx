import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import TwoPlusTwo from "./TwoPlusTwo";
import SparingReason from "./SparingReason";
import validateSpeciesName from "../validate/validate_species_name";
import validatePlanetName from "../validate/validate_planet_name";
import validateSparingReason from "../validate/validate_sparing_reason";
import validateNumberOfBeings from "../validate/validate_number_of_beings";
import validateTwoPlusTwo from "../validate/validate_two_plus_two";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");

  const [planetName, setPlanetName] = useState("Earth");
  const [planetErrorMsgs, setPlanetErrorMsgs] = useState<string[]>([]);

  const [numberOfBeings, setNumberOfBeings] = useState("0");
  const [numberOfBeingsErrorMsgs, setNumberOfBeingsErrorMsgs] = useState<
    string[]
  >([]);

  const [twoPlusTwoValue, setTwoPlusTwoPlusValue] = useState("4");
  const [twoPlusTwoValueErrorMsgs, setTwoPlusTwoValueErrorMsgs] = useState<
    string[]
  >([]);
  const [sparingReason, setSparingReason] = useState("");
  const [sparingReasonErrorMsgs, setSparingReasonErrorMsgs] = useState<
    string[]
  >([]);

  function validate(
    validateField: (name: string) => string[],
    field: string,
    setErrorMessage: (value: React.SetStateAction<string[]>) => void
  ) {
    const errorMessages = validateField(field);
    setErrorMessage(errorMessages);
  }

  function logFormResponse() {
    validate(validatePlanetName, planetName, setPlanetErrorMsgs);
    validate(validateSparingReason, sparingReason, setSparingReasonErrorMsgs);
    validate(
      validateNumberOfBeings,
      numberOfBeings,
      setNumberOfBeingsErrorMsgs
    );
    validate(validateTwoPlusTwo, twoPlusTwoValue, setTwoPlusTwoValueErrorMsgs);

    console.log(
      speciesName,
      planetName,
      numberOfBeings,
      twoPlusTwoValue,
      sparingReason
    );
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(e) => setSpeciesName(e)}
        validateField={validateSpeciesName}
      />
      <PlanetName
        planetName={planetName}
        onChangePlanetName={(e) => setPlanetName(e)}
        errorMessages={planetErrorMsgs}
      />
      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeBeings={(e) => setNumberOfBeings(e)}
        errorMessages={numberOfBeingsErrorMsgs}
      />
      <TwoPlusTwo
        twoPlusTwoValue={twoPlusTwoValue}
        onChangeTwoPlusTwoValue={(e) => setTwoPlusTwoPlusValue(e)}
        errorMessages={twoPlusTwoValueErrorMsgs}
      />
      <SparingReason
        sparingReason={sparingReason}
        onChangeSparingReason={(e) => setSparingReason(e)}
        errorMessages={sparingReasonErrorMsgs}
      />
      <button type="button" onClick={() => logFormResponse()}>
        Submit
      </button>
    </section>
  );
};

export default W12MForm;
