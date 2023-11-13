const Button = ({
  type = "button",
  children,
  isDisabled = false,
  version = "primary",
}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
