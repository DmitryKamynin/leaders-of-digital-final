import { route } from "preact-router";

import Styled from "./styled";

import Header from "../../widgets/Header";
import Button from "@/UI/Button";

const PrivateOffice = (): JSX.Element => {
  return (
    <Styled>
      <Header needBackground />
      <div className="wrapper">
        <h1 className="title">
          Теперь вы получаете выплаты на социальный счет банка “ВТБ”.
        </h1>
        <p className="message">спасибо за доверие !</p>
        <Button
          className="margin"
          callback={(): void => {
            route("/");
          }}
        >
          Главная
        </Button>
      </div>
    </Styled>
  );
};

export default PrivateOffice;
