interface SparingReasonProps {
  sparingReason: string;
  onChangeSparingReason: (value: string) => void;
}

const SparingReason: React.FC<SparingReasonProps> = ({
  sparingReason,
  onChangeSparingReason,
}) => (
  <div>
    <label htmlFor="sparing-reason">Reason for Sparing</label>
    <textarea
      name="sparing-reason"
      id="sparing-reason"
      value={sparingReason}
      onChange={(e) => onChangeSparingReason(e.target.value)}
    />
  </div>
);

export default SparingReason;
