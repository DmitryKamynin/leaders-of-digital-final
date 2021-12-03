import StyledButton from "./styled";

const Button = ({
  className,
  disabled,
  variant,
  children,
  callback,
}: {
  className?: string;
  disabled?: boolean;
  variant?: "blue";
  children: string | JSX.Element;
  callback?: () => void;
}): JSX.Element => {
  return (
    <StyledButton
      disabled={disabled}
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
