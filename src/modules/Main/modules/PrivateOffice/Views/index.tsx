import { route } from "preact-router";

import Styled from "./styled";

import Header from "@/UI/Header";
import Container from "./widgets/Container";
import CardsList from "./widgets/CardsList";
import Accounts from "./widgets/Accounts";
import OpenNewProductBtn from "./widgets/OpenNewProductBtn";
import Promo from "./widgets/Promo";

import Card from "./Assets/card.jpg";

const PrivateOffice = (): JSX.Element => {
  return (
    <Styled>
      <Header />
      <div className="wrapper">
        <div className="leftContainer">
          <div className="container cardsList">
            <Container title="Доступные средства">
              <Accounts />
            </Container>
            <Container title="Счета и карты">
              <CardsList
                groupName="Мастер счёт в рублях"
                cards={[
                  { title: "Семейная карта" },
                  { title: "VTB Mastercard" },
                ]}
              />
              <CardsList
                groupName="Мастер счёт в долларах"
                cards={[
                  { title: "Карта для отпуска" },
                  { title: "VTB Mastercard" },
                ]}
              />
              <CardsList
                groupName="Мастер счёт в евро"
                cards={[{ title: "Копилка" }, { title: "" }]}
              />
            </Container>
          </div>
          <div className="container">
            <OpenNewProductBtn />
          </div>
        </div>

        <div className="container rightContainer">
          <div className="container banner">
            <div className="bannerInfo">
              <div className="text">
                Уважаемая Ирина Федоровна, Вам полагается новая льгота от
                сервиса &quot;Социальное казначейство&quot;. Нажмите по ссылке
                для подробной информации
              </div>
              <div className="icon">
                <img src={Card} alt="" />
              </div>
            </div>
            <button
              type="button"
              className="link"
              onClick={(): void => {
                route("/social/private/start");
              }}
            >
              Оформить льготу! &#8594;
            </button>
          </div>
          <Promo promoTitle="ВТБ Арена" />
          <Promo promoTitle="Продукты" />
        </div>
      </div>
    </Styled>
  );
};

export default PrivateOffice;
