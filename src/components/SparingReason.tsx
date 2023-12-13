import ErrorMessages from "./ErrorMessages";

interface SparingReasonProps {
  sparingReason: string;
  onChangeSparingReason: (value: string) => void;
  errorMessages: string[];
}

const SparingReason: React.FC<SparingReasonProps> = ({
  sparingReason,
  onChangeSparingReason,
  errorMessages,
}) => (
  <>
    <div>
      <label htmlFor="sparing-reason">Reason for Sparing</label>
      <textarea
        name="sparing-reason"
        id="sparing-reason"
        value={sparingReason}
        onChange={(e) => onChangeSparingReason(e.target.value)}
      />
    </div>
    <ErrorMessages messages={errorMessages} />
  </>
);

export default SparingReason;
