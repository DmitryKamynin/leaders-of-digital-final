import { h } from "preact";
import Styled from "./styled";

import Store from "../../../ViewModel";

import basketIcon from "./Assets/basketIcon.png";
import chatIcon from "./Assets/chatIcon.png";
import clockIcon from "./Assets/cloclIcon.png";
import vectorIcon from "./Assets/vectorIcon.png";
import vtbIcon from "./Assets/vtbIcon.png";
import { observer } from "mobx-react-lite";

const ActionBar = observer((): JSX.Element => {
  return (
    <Styled hasMessage={Store.hasMessage}>
      <div className="container">
        <div className="icon">
          <img src={vtbIcon} alt="" />
          Главный
        </div>
        <div className="icon">
          <img src={vectorIcon} alt="" />
          Платежи
        </div>
        <div className="icon">
          <img src={clockIcon} alt="" />
          История
        </div>
        <div className="icon">
          <img src={basketIcon} alt="" />
          Услуги
        </div>
        <button type="button" onClick={Store.handleChat} className="icon">
          <img src={chatIcon} alt="" />
          <div className="notification">1</div>
          Чат
        </button>
      </div>
    </Styled>
  );
});

export default ActionBar;
