import Button from "../../Button/Button";
import styles from "./EsimItem.module.scss";
import svgSptite from "../../../images/icons/sprite.svg";

const EsimItem = ({ group, handleClick }) => {
  const { esimItem, esimItem__btn, esimItem__countrieFlag, esimItem__icon, esimItem__countrieName } =
    styles;

  return (
    <li className={esimItem}>
      <ul>
        {group.map(({ id, url, countrieFlagAlt, countrieName }) => (
          <li key={id}>
            <Button btnClass={esimItem__btn} onClick={() => handleClick(id)}>
              <img
                src={url}
                alt={countrieFlagAlt}
                className={esimItem__countrieFlag}
              />
              <p className={esimItem__countrieName}>{countrieName}</p>
              <svg width="13" height="13" className={esimItem__icon}>
                <use href={svgSptite + "#ungleArrow"}></use>
              </svg>
            </Button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default EsimItem;
///