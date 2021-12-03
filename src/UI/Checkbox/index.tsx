import Styled from "./styled";

const Checkbox = ({
  onClick,
  state,
}: {
  onClick: any;
  state: boolean | "await";
}): JSX.Element => {
  return (
    <Styled state={state}>
      {state === true && <div className="check" />}
      {state === "await" && <div className="await" />}
      <input type="checkbox" onClick={onClick} />
    </Styled>
  );
};

export default Checkbox;
