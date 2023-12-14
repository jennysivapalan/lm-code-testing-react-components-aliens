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

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");
  const [speciesErrorMsgs, setSpeciesErrorMsgs] = useState<string[]>([]);

  const [planetName, setPlanetName] = useState("Earth");
  const [planetErrorMsgs, setPlanetErrorMsgs] = useState<string[]>([]);

  const [numberOfBeings, setNumberOfBeings] = useState("0");
  const [numberOfBeingsErrorMsgs, setnumberOfBeingsErrorMsgs] = useState<
    string[]
  >([]);

  const [twoPlusTwoValue, setTwoPlusTwoPlusValue] = useState("4");

  const [sparingReason, setSparingReason] = useState("");
  const [sparingReasonErrorMsgs, setSparingReasonErrorMsgs] = useState<
    string[]
  >([]);

  function logFormResponse() {
    const validateSpecies: string[] = validateSpeciesName(speciesName);
    validateSpecies.length > 0
      ? setSpeciesErrorMsgs(validateSpecies)
      : setSpeciesErrorMsgs([]);

    const validatePlanet: string[] = validatePlanetName(planetName);
    validatePlanet.length > 0
      ? setPlanetErrorMsgs(validatePlanet)
      : setPlanetErrorMsgs([]);

    const validateReason: string[] = validateSparingReason(sparingReason);
    validateReason.length > 0
      ? setSparingReasonErrorMsgs(validateReason)
      : setSparingReasonErrorMsgs([]);

    const validateBeings: string[] = validateNumberOfBeings(numberOfBeings);
    validateBeings.length > 0
      ? setnumberOfBeingsErrorMsgs(validateBeings)
      : setnumberOfBeingsErrorMsgs([]);

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
        errorMessages={speciesErrorMsgs}
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
