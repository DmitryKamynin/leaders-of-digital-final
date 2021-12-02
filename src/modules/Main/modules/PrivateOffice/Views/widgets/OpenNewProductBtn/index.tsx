import Styled from "./styled";

import PlusIcon from "./Assets/plusIcon.png";

const OpenNewProductBtn = (): JSX.Element => {
  return (
    <Styled>
      <img src={PlusIcon} alt="" />
      Открыть новый продукт
    </Styled>
  );
};

export default OpenNewProductBtn;
