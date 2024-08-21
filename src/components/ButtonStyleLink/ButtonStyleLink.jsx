import styles from "./ButtonStyleLink.module.scss";

const ButtonStyleLink = ({href="#", linkClass, children}) => {
  const { buttonStyleLink } = styles;
  return (
    <a className={`${buttonStyleLink} ${linkClass}`} href={href}>
      {children}
    </a>
  );
};
export default ButtonStyleLink;