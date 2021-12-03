import Styled, {
  FifthBlock,
  FourthBlock,
  SecondBlock,
  ThirdBlock,
} from "./styled";
import Header from "@/UI/HeaderUnautorized";
import Button from "@/UI/Button";
import { route } from "preact-router";

const PromoLending = (): JSX.Element => (
  <>
    <Header needTransparent />
    <Styled>
      <div className="title">социальное казначейство</div>
      <div className="title">
        получайте Льготы
        <br /> без сбора бумаг и очередей
        <br /> с банком ВТБ
      </div>
      <div className="name">
        Валентина 36 лет получила выплаты не посещая МФЦ
      </div>
      <Button
        callback={(): void => {
          route("/", true);
        }}
      >
        Регистрация
      </Button>
    </Styled>
    <SecondBlock>
      <div>
        <div className="title">
          Что такое сервис &quot;Социальное Казначейство&quot;?
        </div>
        <div className="subTitle">
          Это новый подход к назначению мер социальной поддержки.
        </div>
      </div>
    </SecondBlock>
    <ThirdBlock>
      <div>
        <div className="title">
          Что такое &quot;Социальное Казначейство&quot; с банком ВТБ?
        </div>
        <div className="subTitle">
          Это новый подход к назначению мер социальной поддержки.
        </div>
      </div>
    </ThirdBlock>
    <FourthBlock>
      <div className="title">
        При открытии социального счета{" "}
        <span>вы получаете дополнительную поддержку</span> от банка
        &quot;ВТБ&quot;, а именно:
      </div>
      <div className="subTitle">
        Баллы в бонусной программе, которые можно обменять на реальные товары и
        услуги
      </div>
      <div className="subTitle">
        Льготные ставки по кредитам, кредитным картам, ипотеке
        (рефинансированию)
      </div>
      <div className="subTitle">Кэшбек рублями за траты по итогам месяца</div>
    </FourthBlock>
    <FifthBlock>
      <div>
        <div className="title">КАК ЭТО РАБОТАЕТ?</div>
        <div className="subTitle">Очень просто!</div>
        <ul>
          <li>
            <span>1. </span>
            Откройте бесплатный социальный счет в нашем банке.
          </li>
          <li>
            <span>2. </span>
            Свяжите свой аккаунт с сайтом &quot;Госуслуг&quot;.
          </li>
          <li>
            <span>3. </span>
            Получайте поддержку от государства и банка &quot;ВТБ&quot;
          </li>
        </ul>
        <Button
          callback={(): void => {
            route("/", true);
          }}
        >
          Регистрация
        </Button>
      </div>
    </FifthBlock>
  </>
);

export default PromoLending;
