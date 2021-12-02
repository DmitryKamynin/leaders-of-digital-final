import Styled from "./styled";

import CardGroupIcon from "./Assets/cardGroupIcon.png";

import Card from "./widgets/Card";

const CardsList = ({
  groupName,
  cards,
}: {
  groupName: string;
  cards: { title: string }[];
}): JSX.Element => {
  return (
    <Styled>
      <div className="cardContainer">
        <img src={CardGroupIcon} alt="" />
        <div className="title">{groupName}</div>
      </div>
      <div className="cardsList">
        {cards.map(({ title }) => (
          <Card key={title} title={title} />
        ))}
      </div>
    </Styled>
  );
};

export default CardsList;
