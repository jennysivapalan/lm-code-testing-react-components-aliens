import ErrorMessages from "./ErrorMessages";

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
  errorMessages: string[];
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
  errorMessages,
}) => (
  <>
    <div>
      <label htmlFor="species-name">Species Name</label>
      <input
        type="text"
        name="species-name"
        id="species-name"
        value={speciesName}
        onChange={(e) => onChangeSpeciesName(e.target.value)}
      />
    </div>
    <ErrorMessages messages={errorMessages} />
  </>
);

export default SpeciesName;
