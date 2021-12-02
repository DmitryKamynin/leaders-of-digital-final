import { Link } from "preact-router/match";

import Styled from "./styled";

import Header from "./widgets/Header";
import Container from "./widgets/Container";
import CardsList from "./widgets/CardsList";
import Accounts from "./widgets/Accounts";
import OpenNewProductBtn from "./widgets/OpenNewProductBtn";
import Promo from "./widgets/Promo";

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
            <Link className="link" href="/">
              Хочу оформить! &#8594;
            </Link>
          </div>
          <Promo promoTitle="ВТБ Арена" />
          <Promo promoTitle="Продукты" />
        </div>
      </div>
    </Styled>
  );
};

export default PrivateOffice;
