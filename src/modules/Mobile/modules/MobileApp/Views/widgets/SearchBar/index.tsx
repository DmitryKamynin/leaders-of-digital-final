import { observer } from "mobx-react-lite";
import { h } from "preact";
import Styled from "./styled";

import BellIcon from "./Assets/bell.png";
import Burger from "./Assets/burger.png";
import UserIcon from "./Assets/user.png";
import SearchIcon from "./Assets/searchIcon.png";

const SearchBar = observer((): JSX.Element => {
  return (
    <Styled>
      <div className="icon">
        <img src={UserIcon} alt="" />
      </div>
      <div className="search">
        <img src={SearchIcon} width={11} height={11} alt="" />
        <input placeholder="Поиск" />
      </div>
      <div className="icon">
        <img src={Burger} alt="" />
      </div>
      <div className="icon">
        <img src={BellIcon} alt="" />
      </div>
    </Styled>
  );
});

export default SearchBar;
