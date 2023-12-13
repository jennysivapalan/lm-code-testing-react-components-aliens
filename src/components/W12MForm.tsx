import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import TwoPlusTwo from "./TwoPlusTwo";
import SparingReason from "./SparingReason";
import validateSpeciesName from "../validate/validate_species_name";
import validatePlanetName from "../validate/validate_planet_name";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");
  const [speciesErrorMsgs, setSpeciesErrorMsgs] = useState<string[]>([]);

  const [planetName, setPlanetName] = useState("Earth");
  const [planetErrorMsgs, setPlanetErrorMsgs] = useState<string[]>([]);

  const [numberOfBeings, setNumberOfBeings] = useState("0");
  const [twoPlusTwoValue, setTwoPlusTwoPlusValue] = useState("4");
  const [sparingReason, setSparingReason] = useState("");

  function logFormResponse() {
    const validateSpecies: string[] = validateSpeciesName(speciesName);
    validateSpecies.length > 0
      ? setSpeciesErrorMsgs(validateSpecies)
      : setSpeciesErrorMsgs([]);

    const validatePlanet: string[] = validatePlanetName(planetName);
    validatePlanet.length > 0
      ? setPlanetErrorMsgs(validatePlanet)
      : setPlanetErrorMsgs([]);

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
      />
      <TwoPlusTwo
        twoPlusTwoValue={twoPlusTwoValue}
        onChangeTwoPlusTwoValue={(e) => setTwoPlusTwoPlusValue(e)}
      />
      <SparingReason
        sparingReason={sparingReason}
        onChangeSparingReason={(e) => setSparingReason(e)}
      />
      <button type="button" onClick={() => logFormResponse()}>
        Submit
      </button>
    </section>
  );
};

export default W12MForm;
