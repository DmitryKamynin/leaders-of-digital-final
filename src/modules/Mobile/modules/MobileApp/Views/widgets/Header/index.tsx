import { observer } from "mobx-react-lite";
import { h } from "preact";
import Styled from "./styled";

import CellIcon from "./Assets/cell.png";
import WifiIcon from "./Assets/wifi.png";
import BatteryIcon from "./Assets/battery.png";

const Header = observer((): JSX.Element => {
  return (
    <Styled>
      <div className="time">{new Date().toLocaleTimeString().slice(0, 5)}</div>
      <div className="icons">
        <img width={18} height={11} src={CellIcon} alt="" />
        <img width={16} height={11} src={WifiIcon} alt="" />
        <img width={22} height={12} src={BatteryIcon} alt="" />
      </div>
    </Styled>
  );
});

export default Header;
