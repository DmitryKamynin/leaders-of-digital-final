import Styled from "./styled";
import { Link } from "preact-router/match";
import IconSvg from "./widgets/IconSvg";

const Logo = ({ colored }: { colored: boolean }): JSX.Element => (
  <Styled colored={colored}>
    <Link className="link" href="/main">
      <IconSvg colored={colored} />
      ВТБ ОНЛАЙН
    </Link>
  </Styled>
);
export default Logo;
