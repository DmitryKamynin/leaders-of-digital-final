import Styled from "./styled";
import Button from "@/UI/Button";

const BankOfferCard = ({
  img,
  offer,
  percent,
  hovered,
  set,
  id,
}: {
  img: string;
  offer: string;
  percent: string;
  hovered: number;
  set: (id: number) => void;
  id: number;
}): JSX.Element => {
  return (
    <Styled
      onMouseMove={(): void => {
        set(id);
      }}
      hovered={hovered === id}
    >
      <div className="container">
        <div className="img">
          <img src={img} alt="" />
        </div>

        <div className="break" />
        <div className="title">
          {offer} <span>{percent} </span>
        </div>
      </div>
      <div className="btnContainer">
        <Button variant="blue" className="firstButton">
          Оформить
        </Button>
        <Button>Подробнее</Button>
      </div>
    </Styled>
  );
};

export default BankOfferCard;
