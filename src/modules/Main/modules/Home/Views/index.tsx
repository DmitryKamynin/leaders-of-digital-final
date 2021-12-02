import { useState } from "preact/compat";

import Styled, { StyledStartContainer } from "./styled";

import Header from "./widgets/Header";
import LargeCard from "./widgets/LargeCard";
import NormalCard from "./widgets/NormalCard";
import BankOfferCard from "./widgets/BankOfferCard";
import OfferList from "./widgets/OfferList";
import Banner from "./widgets/Banner";

const Home = (): JSX.Element => {
  const [hovered, setHovered] = useState(5);
  const set = (id: number): void => setHovered(id);
  return (
    <>
      <Header needTransparent />
      <StyledStartContainer>
        <div className="slider">
          <LargeCard />
          <NormalCard
            icon="https://www.vtb.ru/-/media/headlesscms/main/hero_new/slider/slider_new/kk110_slider_new.svg"
            text=" Волшебно выгодная карта. 200 дней без % и 10% кешбэк на всё"
          />
          <NormalCard
            icon="https://www.vtb.ru/-/media/headlesscms/main/hero_new/slider/slider_new/icon_champions.svg"
            text="Чемпионская ставка по вкладу «История успеха» до 9%"
          />
          <NormalCard
            icon="	https://www.vtb.ru/-/media/headlesscms/main/hero_new/slider/slider_new/kn_slider_new.svg"
            text="Кредит наличными по ставке от 5,9%. Подарок к ставкедо 3 000 бонусных рублей"
          />
          <NormalCard
            icon="	https://www.vtb.ru/-/media/headlesscms/main/hero_new/zp_card/zp_card.svg"
            text="Зарплата и кешбэк 1,5% «на сладкое». Получайте зарплату и пользуйтесь преимуществами"
          />
        </div>
      </StyledStartContainer>

      <Styled>
        <div className="container">
          <h1 className="title">Предложения банка</h1>
          <div className="content">
            <BankOfferCard
              img="	https://www.vtb.ru/-/media/headlesscms/main/suggest-bank/credit.png"
              offer="Кредит"
              percent="от 5,9%"
              id={0}
              set={set}
              hovered={hovered}
            />
            <BankOfferCard
              img="	https://www.vtb.ru/-/media/headlesscms/main/suggest-bank/creditcard.png"
              offer="Кредитная карта"
              percent="200 дней без %"
              id={1}
              set={set}
              hovered={hovered}
            />
            <BankOfferCard
              img="	https://www.vtb.ru/-/media/headlesscms/main/suggest-bank/mortgage.png"
              offer="Ипотека"
              percent="от 4,3%"
              id={2}
              set={set}
              hovered={hovered}
            />
            <BankOfferCard
              img="https://www.vtb.ru/-/media/headlesscms/main/suggest-bank/dc_multikarta.png"
              offer="Мультикарта"
              percent="1000 ₽ на счет"
              id={3}
              set={set}
              hovered={hovered}
            />
          </div>
        </div>

        <div className="container">
          <h1 className="title">Предложения для вас</h1>
          <div className="content">
            <OfferList />
            <div className="bannerContainer">
              <Banner
                img="https://www.vtb.ru/-/media/headlesscms/main/suggest-your/1/security_1920.png
"
                title="Правила финансовой безопасности"
                subtitle="Обращаем ваше внимание на несколько простых правил работы с интернет-банком и мобильным приложением"
              />
              <Banner
                img="https://www.vtb.ru/-/media/headlesscms/main/suggest-your/1/clock_1920-1024.png"
                title="Кредитные каникулы"
                subtitle="Для тех, кто попал в сложную жизненную ситуацию"
                small
              />
              <Banner
                img="https://www.vtb.ru/-/media/headlesscms/main/suggest-your/1/heart_1920-1024.png"
                title="Детские пособия с картой ВТБ «Мир»"
                subtitle="Получайте социальные выплаты и другие преимущества с картой ВТБ «Мир»"
                small
              />
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default Home;
