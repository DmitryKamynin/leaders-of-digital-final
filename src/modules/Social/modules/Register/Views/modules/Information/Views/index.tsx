import Styled from "./styled";
import Header from "@/UI/Header";
import Button from "@/UI/Button";
import { route } from "preact-router";

const Information = (): JSX.Element => {
  return (
    <>
      <Header />

      <Styled>
        <div className="title">
          УЖЕ МНОЖЕСТВО СЕМЕЙ ИСПОЛЬЗУЮТ ЭТУ УДОБНУЮ СИСТЕМУ{" "}
        </div>
        <ul>
          Для участия в программе Вам необходимо иметь специальный социальный
          счет, на который будут начисляться государственные выплаты. Такой счет
          предоставляется банком &quot;ВТБ&quot; на специальных условиях:
          <li>- полностью бесплатное обслуживание</li>
          <li>
            - увеличенный процент на остаток при хранении средств на данном
            счете
          </li>
          <li>
            - бесплатные переводы средств с социального счета на любой другой
            счет любого банка
          </li>
          <li>
            - при выпуске карты к счету - повышенный кэшбэк за совершенные
            операции.
          </li>
          Подробнее о данном счете и его использовании можно узнать перейдя по
          ссылке
        </ul>
        <Button
          callback={(): void => {
            route("/social/personal");
          }}
          variant="blue"
        >
          Открыть счёт
        </Button>
      </Styled>
    </>
  );
};

export default Information;
