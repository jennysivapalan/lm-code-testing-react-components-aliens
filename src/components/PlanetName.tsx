interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => (
  <div>
    <label htmlFor="planet-name">Planet Name</label>
    <input
      type="text"
      name="planet-name"
      id="planet-name"
      value={planetName}
      onChange={(e) => onChangePlanetName(e.target.value)}
    />
  </div>
);

export default PlanetName;
