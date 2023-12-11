import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import TwoPlusTwo from "./TwoPlusTwo";
import SparingReason from "./SparingReason";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(e) => setSpeciesName(e)}
      />
      <PlanetName />
      <NumberOfBeings />
      <TwoPlusTwo />
      <SparingReason />
    </section>
  );
};

export default W12MForm;
