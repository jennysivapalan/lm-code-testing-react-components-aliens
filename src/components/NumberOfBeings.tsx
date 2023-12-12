interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeBeings: (value: string) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeBeings,
}) => (
  <div>
    <label htmlFor="number-of-beings">Number Of Beings</label>
    <input
      type="text"
      name="number-of-beings"
      id="number-of-beings"
      value={numberOfBeings}
      onChange={(e) => onChangeBeings(e.target.value)}
    />
  </div>
);

export default NumberOfBeings;
