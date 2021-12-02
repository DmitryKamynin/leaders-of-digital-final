import { observer } from "mobx-react-lite";
import { h } from "preact";
import Styled from "./styled";
import { useEffect } from "preact/compat";

import EyeIcon from "./Assets/eyeIcon.png";
import StarIcon from "./Assets/starIcon.png";
import TotalIcon from "./Assets/totalIcon.png";

const Fund = observer(
  ({ variant }: { variant: "total" | "bonus" }): JSX.Element => {
    useEffect(() => {
      if (!variant) throw new Error("invalid variant field");
    }, [variant]);

    return (
      <Styled>
        <div className="container">
          <div className="icon">
            <img src={variant === "total" ? TotalIcon : StarIcon} alt="" />
          </div>
          <div className="title">
            {variant === "total" ? "Всего" : "Бонусы"}
            <div className="sum">{variant === "total" ? "356 ₽" : "0"}</div>
          </div>
          {variant === "total" ? (
            <div className="eyeIcon">
              <img width={24} height={24} src={EyeIcon} alt="" />
            </div>
          ) : (
            ""
          )}
        </div>
      </Styled>
    );
  }
);

export default Fund;
