import Styled from "./styled";
import OfferCategory from "./widgets/OfferCategory";

const OfferList = (): JSX.Element => {
  return (
    <Styled>
      <OfferCategory selected>Важное</OfferCategory>
      <OfferCategory>Инвестиции</OfferCategory>
      <OfferCategory>Для пенсионеров</OfferCategory>
      <OfferCategory>Привилегия</OfferCategory>
      <OfferCategory>Зарплатным клиентам</OfferCategory>
      <OfferCategory>Экопроекты</OfferCategory>
      <OfferCategory>Акции</OfferCategory>
      <OfferCategory>Другое</OfferCategory>
    </Styled>
  );
};

export default OfferList;
