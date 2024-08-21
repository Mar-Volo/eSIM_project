import styles from "./Navigation.module.scss";

const Navigation = () => {
    const {nav, nav__item, nav__link, nav__list} = styles
  return (
    <nav className={nav}>
      <ul className={nav__list}>
        <li className={nav__item}>
          <a className={nav__link} href="">Destinations</a>
        </li>
        <li className={nav__item}>
          <a className={nav__link} href="">About us</a>
        </li>
        <li className={nav__item}>
          <a className={nav__link} href="">blog</a>
        </li>
        <li className={nav__item}>
          <a className={nav__link} href="">faq</a>
        </li>
        <li className={nav__item}>
          <a className={nav__link} href="">contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
