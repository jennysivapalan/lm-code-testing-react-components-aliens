interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => (
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
);

export default SpeciesName;
