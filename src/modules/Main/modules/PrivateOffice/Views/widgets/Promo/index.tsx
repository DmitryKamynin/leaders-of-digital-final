import Styled from "./styled";

const Promo = ({ promoTitle }: { promoTitle: string }): JSX.Element => {
  return (
    <Styled>
      <div className="promoTitle">{promoTitle}</div>
      <div className="promoContent">
        <div className="previewContainer">
          <div className="preview color1" />
          <div className="previewTitle">Big Love Show</div>
          <div className="previewSubTitle">12 фев 2022г., Москва</div>
        </div>
        <div className="previewContainer">
          <div className="preview color2" />
          <div className="previewTitle">Энрике Иглесиас</div>
          <div className="previewSubTitle">14 фев 2022г., Москва</div>
        </div>
        <div className="previewContainer">
          <div className="preview color3" />
          <div className="previewTitle">KORN</div>
          <div className="previewSubTitle">26 июн 2022г., Москва</div>
        </div>
      </div>
    </Styled>
  );
};

export default Promo;
