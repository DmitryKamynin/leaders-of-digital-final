import Styled from "./styled";

import Logo from "./widgets/Logo";
import LoginBtn from "./widgets/LoginBtn";
import Arrow from "./widgets/Arrow";

import { useEffect, useRef, useState } from "preact/compat";

const Header = ({
  needTransparent,
}: {
  needTransparent?: boolean;
}): JSX.Element => {
  const [transparent, setTransparent] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.pageYOffset > 30) setTransparent(false);
      else setTransparent(true);
    };
    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [transparent]);

  const tran = !!needTransparent && transparent;
  return (
    <Styled
      onMouseMove={(): void => {
        if (window.pageYOffset < 30) setTransparent(false);
      }}
      onMouseOut={(): void => {
        if (window.pageYOffset < 30) setTransparent(true);
      }}
      transparent={tran}
    >
      <div className="logo">
        <Logo colored={tran} />
      </div>
      <div className="container">
        <div className="flex">
          <div className="clients">Частным лицам</div>
          <div className="clients">Малый и средний бизнес</div>
          <div className="clients">Крупный бизнес</div>
          <Arrow colored={tran} />
          <div className="uslugiMobile">Платежи и переводы</div>
          <LoginBtn colored={tran} />
        </div>
        <div className="flex">
          <div className="uslugi">Кредиты</div>
          <div className="uslugi">Карты</div>
          <div className="uslugi">Ипотека</div>
          <div className="uslugi">Автокредиты</div>
          <div className="uslugi">Вклады и счета</div>
          <div className="uslugi">Инвестиции</div>
          <div className="uslugi">Онлайн-сервсисы</div>
          <div className="uslugi">Платежи и переводы</div>
          <div className="uslugi">Другие услуги</div>
          <div className="uslugi">Привилегия</div>
          <div className="uslugi">Private Banking</div>
        </div>
      </div>
    </Styled>
  );
};

export default Header;
