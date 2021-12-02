import { h } from "preact";
import Styled from "./styled";

import ArrowIcon from "./Assets/arrow.png";
import { useEffect, useRef, useState } from "preact/compat";

const Container = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[] | string;
}) => {
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
      style={{ height: `${collapse ? height : 54}px` }}
      ref={ref}
    >
      <div className="collapseTitle">
        {title}
        <button
          type="button"
          onClick={(): void => {
            setCollapse(!collapse);
          }}
        >
          <img src={ArrowIcon} alt="" />
        </button>
      </div>

      {children}
    </Styled>
  );
};

export default Container;
