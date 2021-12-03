import { route } from "preact-router";

import Styled from "./styled";

import Header from "@/UI/Header";
import Button from "@/UI/Button";
import { useState } from "preact/compat";
import Checkbox from "@/UI/Checkbox";

const PrivateOffice = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Styled>
      <Header />
      <div className="wrapper">
        <h1 className="title">СЧЁТ</h1>
        <p className="message">
          Социальный счет банка &quot;ВТБ&quot; для получения выплат, льгот и
          пособий от
          <br /> государства
        </p>
        <div className="accountsContainer">
          <div className="account">
            Номер счёта
            <br />
            4956***********4223
          </div>
          <Checkbox
            onClick={(): void => {
              setChecked(!checked);
            }}
            state={checked}
          />
        </div>
        <div className="btnWrapper">
          <Button variant="blue" className="margin">
            Подробнее о льготе
          </Button>
          <Button
            disabled={!checked}
            callback={(): void => {
              route("/social/private/thanks", true);
            }}
            variant="blue"
          >
            Получить льготу
          </Button>
        </div>
      </div>
    </Styled>
  );
};

export default PrivateOffice;
