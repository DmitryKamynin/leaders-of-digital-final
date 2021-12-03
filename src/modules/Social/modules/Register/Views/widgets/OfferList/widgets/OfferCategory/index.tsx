import Styled from "./styled";

const OfferCategory = ({
  children,
  selected,
}: {
  children: string;
  selected?: boolean;
}): JSX.Element => {
  return <Styled selected={selected}>{children}</Styled>;
};

export default OfferCategory;
