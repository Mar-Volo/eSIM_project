import IconButton from "../../IconButton/IconButton.jsx";
import styles from "./HeroTable.module.scss";
import svgSprite from "../../../images/icons/sprite.svg";

const HeroTable = () => {
  const {
    table,
    table__label,
    table__searchBtn,
    table__input,
    table__closeBtn,
    table__list,
    table__item,
    table__iconBox,
  } = styles;
  return (
    <div className={table}>
      <label className={table__label}>
        <IconButton className={table__searchBtn}>
          <svg width="15" height="15">
            <use href={svgSprite + "#search"}></use>
          </svg>
        </IconButton>
        <input placeholder="Search" className={table__input} type="text" />
        <IconButton className={table__closeBtn}>
          <svg width="5" height="6">
            <use href={svgSprite + "#close"}></use>
          </svg>
        </IconButton>
      </label>
      <ul className={table__list}>
        <li className={table__item}>
            <div className={table__iconBox}>
            <svg width="9" height="9">
            <use href={svgSprite + "#africa"}></use>
          </svg>
            </div>
        
          Africa
        </li>
        <li className={table__item}>
            <div className={table__iconBox}>
            <svg width="9" height="9">
            <use href={svgSprite + "#north-america"}></use>
          </svg>
            </div>
          
          North America
        </li>
        <li className={table__item}>
        <div className={table__iconBox}>
        <svg width="9" height="9">
            <use href={svgSprite + "#asia"}></use>
          </svg>
        </div>
          
          Asia
        </li>
        <li className={table__item}>
        <div className={table__iconBox}>
        <svg width="9" height="9">
            <use href={svgSprite + "#africa"}></use>
          </svg>
        </div>
         
          South America
        </li>
        <li className={table__item}>
        <div className={table__iconBox}>
        <svg width="9" height="9">
            <use href={svgSprite + "#south-america"}></use>
          </svg>
        </div>
         
          North America
        </li>
      </ul>
    </div>
  );
};
export default HeroTable;
