import Styled from "./styled";

import Logo from "@/UI/Logo";

import SearchIcon from "./Assets/searchIcon.png";
import UserIcon from "./Assets/user.png";
import ArrowIcon from "./Assets/arrow.png";

const Header = (): JSX.Element => {
  return (
    <Styled>
      <Logo colored={false} />
      <div className="container">
        <button type="button">Главная</button>
        <button type="button">Платежи</button>
        <button type="button">Истоия</button>
        <button type="button">Справки</button>
        <button type="button" className="activeButton">
          Услуги
        </button>
      </div>
      <div className="icons">
        <img src={SearchIcon} alt="" /> <img src={UserIcon} alt="" />{" "}
        <img src={ArrowIcon} alt="" />
      </div>
    </Styled>
  );
};

export default Header;
