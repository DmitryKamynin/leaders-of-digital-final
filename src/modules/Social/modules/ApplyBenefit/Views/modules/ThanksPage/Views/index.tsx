import { route } from "preact-router";

import Styled from "./styled";

import Header from "@/UI/Header";
import Button from "@/UI/Button";

const PrivateOffice = (): JSX.Element => {
  return (
    <Styled>
      <Header />
      <div className="wrapper">
        <h1 className="title">
          Теперь вы получаете выплаты на социальный счет банка “ВТБ”.
        </h1>
        <p className="message">спасибо за доверие !</p>
        <Button
          className="margin"
          callback={(): void => {
            route("/", true);
          }}
        >
          Главная
        </Button>
      </div>
    </Styled>
  );
};

export default PrivateOffice;
