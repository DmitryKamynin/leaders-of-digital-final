import { route } from "preact-router";

import Styled from "./styled";

import Header from "../../widgets/Header";
import Button from "@/UI/Button";

const PrivateOffice = (): JSX.Element => {
  return (
    <Styled>
      <Header />
      <div className="wrapper">
        <h1 className="title">СЕРВИС СОЦИАЛЬНОЕ КАЗНАЧЕЙСТВО</h1>
        <p className="message">
          Уважаемая Ирина Федоровна,
          <br /> по данным, имеющимся в сервисе &quot;Социальное
          Казначейство&quot;,
          <br /> вам полагается &quot;Наименование_Льготы&quot;, которую вы
          можете получать на имеющийся у вас социальный счет банка
          &quot;ВТБ&quot; в два клика.
        </p>
        <Button variant="blue" className="margin">
          Подробнее о льготе
        </Button>
        <Button
          variant="blue"
          callback={(): void => {
            route("/social/private/end");
          }}
        >
          Получить льготу
        </Button>
      </div>
    </Styled>
  );
};

export default PrivateOffice;
