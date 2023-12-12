interface TwoPlusTwoProps {
  twoPlusTwoValue: string;
  onChangeTwoPlusTwoValue: (value: string) => void;
}

const TwoPlusTwo: React.FC<TwoPlusTwoProps> = ({
  twoPlusTwoValue,
  onChangeTwoPlusTwoValue,
}) => (
  <div>
    <label htmlFor="two-plus-two">What is 2 + 2?</label>
    <select
      name="two-plus-two"
      id="two-plus-two"
      onChange={(e) => onChangeTwoPlusTwoValue(e.target.value)}
      value={twoPlusTwoValue}
    >
      <option value="4">4</option>
      <option value="not-4">Not 4</option>
    </select>
  </div>
);

export default TwoPlusTwo;
