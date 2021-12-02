import Styled from "./styled";

const NormalCard = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}): JSX.Element => {
  return (
    <Styled>
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="text">{text}</div>
    </Styled>
  );
};

export default NormalCard;
