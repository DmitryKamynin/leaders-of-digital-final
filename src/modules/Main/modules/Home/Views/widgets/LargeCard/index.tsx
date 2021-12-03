import Styled from "./styled";
import Button from "@/UI/Button";
import { route } from "preact-router";

const LargeCard = (): JSX.Element => {
  return (
    <Styled>
      <div className="title">
        Получайте льготы без лишних бумаг и очередей{" "}
        <span>с бонусами от банка</span>
      </div>
      <Button
        variant="blue"
        callback={(): void => {
          route("/social", true);
        }}
        className="firstButton"
      >
        Оформить
      </Button>
    </Styled>
  );
};

export default LargeCard;
