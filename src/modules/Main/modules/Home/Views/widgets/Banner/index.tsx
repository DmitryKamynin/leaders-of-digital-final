import Styled from "./styled";
import Button from "@/UI/Button";

const Banner = ({
  img,
  title,
  subtitle,
  small,
  buttonOnClick,
}: {
  title: string;
  subtitle: string;
  img: string;
  small?: boolean;
  buttonOnClick?: () => void;
}): JSX.Element => {
  return (
    <Styled small={small}>
      <div className="text">
        <div className="bannerTitle">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="btnContainer">
        <Button
          callback={(): void => {
            if (buttonOnClick) buttonOnClick();
          }}
        >
          Подробнее
        </Button>
      </div>
      <div className="icon">
        <img src={img} alt="" />
      </div>
    </Styled>
  );
};

export default Banner;
