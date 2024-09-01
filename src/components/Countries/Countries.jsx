import { useRef, useState, useEffect } from "react";
import Container from "../Container/Container";
import EsimList from "../EsimsList/EsimList";
import svgSprite from "../../images/icons/sprite.svg";
import styles from "./Countries.module.scss";

const Countries = () => {
  const tabRefLocal = useRef(null);
  const tabRefRegional = useRef(null);
  const tabBgRef = useRef(null);
  const [tabWidth, setTabWidth] = useState("");
  const [activeTab, setActiveTab] = useState("");

  const {
    countries,
    countries__container,
    countries__title,
    countries__discription,
    countries__topLine,
    topLine__tabsBox,
    topLine__tabs,
    topLine__item,
    topLine__tab,
    topLine__tabBg,
    left,
    right,
    active,
  } = styles;

  const handleTabClick = (tabName, ref) => {
    if (ref.current) {
      const width = ref.current.clientWidth + "px";
      setTabWidth(width);
    }
    setActiveTab(tabName);
  };

  useEffect(() => {
    if (tabRefLocal.current) {
      setActiveTab("local");
      setTabWidth(tabRefLocal.current.clientWidth + "px");
    }
  }, []);

  return (
    <section className={countries}>
      <h2 className={countries__title}>Popular countries</h2>
      <p className={countries__discription}>
        Our eSIMs are trusted by over 1,000,000 people worldwide
      </p>
      <Container containerClass={countries__container}>
        <header className={countries__topLine}>
          <div className={topLine__tabsBox}>
            <div
              style={{
                width: tabWidth,
                ...(activeTab === "regional" // потенційно може знадобитися більш адаптивне рішення
                  ? { left: "calc(50%  + 72px)" }
                  : { left: "85px" }),
              }}
              ref={tabBgRef}
              className={topLine__tabBg}
            >
              <svg width="86" height="50" className={left}>
                <use href={svgSprite + "#local-esims-bg-left"}></use>
              </svg>
              <svg width="86" height="50" className={right}>
                <use href={svgSprite + "#local-esims-bg-right"}></use>
              </svg>
            </div>
            <ul className={topLine__tabs}>
              <li className={topLine__item}>
                <button
                  role="tab"
                  onClick={() => handleTabClick("local", tabRefLocal)}
                  ref={tabRefLocal}
                  className={
                    activeTab === "local"
                      ? `${topLine__tab} ${active}`
                      : `${topLine__tab}`
                  }
                >
                  Local esims
                </button>
              </li>
              <li className={topLine__item}>
                <button
                  role="tab"
                  onClick={() => handleTabClick("regional", tabRefRegional)}
                  ref={tabRefRegional}
                  className={
                    activeTab === "regional"
                      ? `${topLine__tab} ${active}`
                      : `${topLine__tab}`
                  }
                >
                  Regional esims
                </button>
              </li>
            </ul>
          </div>
        </header>
        <Container>
        <EsimList/>
        </Container>
      </Container>
    </section>
  );
};
export default Countries;