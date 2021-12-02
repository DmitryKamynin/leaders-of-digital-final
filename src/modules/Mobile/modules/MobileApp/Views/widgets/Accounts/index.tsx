import { observer } from "mobx-react-lite";
import { h } from "preact";
import Styled from "./styled";

const Account = observer(
  ({
    title,
    cardLastNumber,
    sum,
  }: {
    title: string;
    cardLastNumber: number;
    sum: string;
  }): JSX.Element => {
    return (
      <Styled>
        <div className="container">
          <div className="title">{title}</div>
          <div className="cardLastNumber">· {cardLastNumber}</div>
        </div>
        <div className="sum">{sum}</div>
      </Styled>
    );
  }
);

export default Account;
