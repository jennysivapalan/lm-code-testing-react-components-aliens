import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import TwoPlusTwo from "./TwoPlusTwo";
import SparingReason from "./SparingReason";

const W12MForm = () => {
  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName />
      <PlanetName />
      <NumberOfBeings />
      <TwoPlusTwo />
      <SparingReason />
    </section>
  );
};

export default W12MForm;
