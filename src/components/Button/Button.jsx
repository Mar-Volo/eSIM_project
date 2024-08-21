import styles from "./Button.module.scss";

const Button = ({ children, onClick, btnClass = "", btnType="button" }) => {
  const { button } = styles;

  return (
    <button
      type={btnType}
      onClick={onClick}
      className={`${btnClass} ${button}`}
    >
      {children}
    </button>
  );
};
export default Button;
