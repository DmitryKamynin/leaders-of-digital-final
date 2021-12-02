import Styled from "./styled";

import StarIcon from "./Assets/starIcon.png";
import BonusIcon from "./Assets/bonusIcon.png";

const Accounts = (): JSX.Element => {
  return (
    <div>
      <Styled>
        <img src={BonusIcon} alt="" />
        Всего
      </Styled>
      <Styled>
        <img src={StarIcon} alt="" />
        Бонусы
      </Styled>
    </div>
  );
};

export default Accounts;
