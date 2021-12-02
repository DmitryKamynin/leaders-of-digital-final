import Styled from "./styled";

import CardIcon from "./Assets/cardIcon.png";

const Index = ({ title }: { title: string }): JSX.Element => {
  return (
    <Styled>
      <img src={CardIcon} alt="" />
      {title}
    </Styled>
  );
};

export default Index;
