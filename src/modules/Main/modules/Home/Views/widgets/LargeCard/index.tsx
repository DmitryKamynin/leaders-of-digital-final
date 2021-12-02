import Styled from "./styled";
import Button from "@/UI/Button";

const LargeCard = (): JSX.Element => {
  return (
    <Styled>
      <div className="title">
        Получайте льготы на вашу дебетовую карту.{" "}
        <span>Узнайте о новом способе</span>
      </div>
      <Button variant="blue" className="firstButton">
        Оформить
      </Button>
      <Button>Подробнее</Button>
    </Styled>
  );
};

export default LargeCard;
