import ErrorMessages from "./ErrorMessages";

interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
  errorMessages: string[];
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
  errorMessages,
}) => (
  <>
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
    <ErrorMessages messages={errorMessages} />
  </>
);

export default PlanetName;
