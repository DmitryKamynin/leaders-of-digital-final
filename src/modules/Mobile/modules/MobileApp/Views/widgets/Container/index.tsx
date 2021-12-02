import { h } from "preact";
import Styled from "./styled";

import CloseIcon from "./Assets/closeIcon.png";
import ArrowIcon from "./Assets/arrow.png";
import VerticalMenuIcon from "./Assets/verticalMenuIcon.png";
import { useEffect, useRef, useState } from "preact/compat";

type OverLoadContainer = {
  ({
    variant,
    title,
    children,
  }: {
    variant: "collapse";
    title: string;
    children: JSX.Element | JSX.Element[] | string;
  }): JSX.Element;
  ({
    variant,
    title,
    children,
  }: {
    variant: "close";
    title?: undefined;
    children: JSX.Element | JSX.Element[] | string;
  }): JSX.Element;
};

const Container: OverLoadContainer = ({ variant, title, children }) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [height, setHeight] = useState<number>(56);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref]);

  return (
    <Styled
      collapse={collapse}
      style={
        variant === "collapse" ? { height: `${collapse ? height : 56}px` } : {}
      }
      ref={ref}
    >
      {variant === "close" ? (
        <div>
          <div className="closeTitle">
            Новые возможности
            <img src={CloseIcon} alt="" />
          </div>
          <div className="subTitle">Посмотрите что изменилось в приложении</div>
        </div>
      ) : (
        <div className="collapseTitle">
          {title}
          <button
            type="button"
            onClick={(): void => {
              setCollapse(!collapse);
            }}
            className="icon"
          >
            <img src={ArrowIcon} alt="" />
          </button>
          <div className="icon">
            <img src={VerticalMenuIcon} alt="" />
          </div>
        </div>
      )}
      {children}
    </Styled>
  );
};

export default Container;
