import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import TwoPlusTwo from "./TwoPlusTwo";
import SparingReason from "./SparingReason";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");
  const [planetName, setPlanetName] = useState("Earth");
  const [numberOfBeings, setNumberOfBeings] = useState("0");
  const [twoPlusTwoValue, setTwoPlusTwoPlusValue] = useState("4");
  const [sparingReason, setSparingReason] = useState("");

  function logFormResponse() {
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
      />
      <PlanetName
        planetName={planetName}
        onChangePlanetName={(e) => setPlanetName(e)}
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
