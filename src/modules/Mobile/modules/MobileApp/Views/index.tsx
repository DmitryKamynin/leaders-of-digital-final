import { observer } from "mobx-react-lite";
import { h } from "preact";

import Styled from "./styled";

import Header from "./widgets/Header";
import SearchBar from "./widgets/SearchBar";
import Container from "./widgets/Container";
import Account from "./widgets/Accounts";
import Fund from "./widgets/Fund";
import ActionBar from "./widgets/ActionBar";
import Chat from "./widgets/Chat";

import Banner from "./Assets/banner.png";
import Banner1 from "./Assets/banner1.png";

import Store from "../ViewModel";
import { useEffect } from "preact/compat";
import { route } from "preact-router";

const MobileApp = observer((): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      Store.getMessage();
    }, 3000);
  }, []);
  return (
    <Styled chatOpen={Store.chatOpen}>
      <div className="mobileTemplate">
        <Header />
        <SearchBar />
        <Container variant="close">
          <button
            type="button"
            onClick={(): void => {
              route("/social/");
            }}
            className="bannerContainer"
          >
            <img src={Banner} alt="" />
          </button>
        </Container>
        <Container variant="collapse" title="Доступные средства">
          <Fund variant="total" />
          <Fund variant="bonus" />
        </Container>
        <Container variant="collapse" title="Карты и счета">
          <Account
            title="Мастер счёт в рублях"
            cardLastNumber={9099}
            sum="880,50 ₽"
          />
          <Account title="Текущий счёт" cardLastNumber={5049} sum="3500 ₽" />
          <Account
            title="Мастер счет в долларах"
            cardLastNumber={9049}
            sum="109 $"
          />
          <Account
            title="Мастер счет в евро"
            cardLastNumber={9019}
            sum="500 €"
          />
          <div>
            <button
              type="button"
              onClick={(): void => {
                route("/social/");
              }}
              className="bannerContainer"
            >
              <img src={Banner1} alt="" />
            </button>
          </div>
        </Container>
        <ActionBar />

        <Chat />
      </div>
    </Styled>
  );
});

export default MobileApp;
