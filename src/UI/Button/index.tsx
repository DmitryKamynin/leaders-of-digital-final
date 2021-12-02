import StyledButton from "./styled";

const Button = ({
  className,
  variant,
  children,
  callback,
}: {
  className?: string;
  variant?: "blue";
  children: string | JSX.Element;
  callback?: () => void;
}): JSX.Element => {
  return (
    <StyledButton
      onClick={(): void => {
        if (callback) callback();
      }}
      variant={variant}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
