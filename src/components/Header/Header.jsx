import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import ButtonStyleLink from "../ButtonStyleLink/ButtonStyleLink";
import IconButton from "../IconButton/IconButton";
import styles from "./Header.module.scss";
import svgSprite from "../../images/icons/sprite.svg";
import phoneImg from "../../images/phone/phone.png";
import slidTop1 from "../../images/phone-slides/top1.jpg";
import slidTop2 from "../../images/phone-slides/top2.jpg";
import slidTop3 from "../../images/phone-slides/top3.jpg";
import slidTop4 from "../../images/phone-slides/top4.jpg";
import slidTop5 from "../../images/phone-slides/top5.jpg";
import bottomSlide1 from "../../images/phone-slides/bottom-slides/bottom1.jpg";
import bottomSlide2 from "../../images/phone-slides/bottom-slides/bottom2.jpg";
import bottomSlide3 from "../../images/phone-slides/bottom-slides/bottom3.jpg";

const bottomSliderResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const topSlides = [
  { src: slidTop1, alt: "slide1", id: "1" },
  { src: slidTop2, alt: "slide2", id: "2" },
  { src: slidTop3, alt: "slide3", id: "3" },
  { src: slidTop4, alt: "slide4", id: "4" },
  { src: slidTop5, alt: "slide5", id: "5" },
];

const bottomSlides = [
  { src: bottomSlide1, alt: "slide1", id: "1" },
  { src: bottomSlide2, alt: "slide2", id: "2" },
  { src: bottomSlide3, alt: "slide3", id: "3" },
];

const Header = () => {
  const {
    header,
    header__topLine,
    langSelectBtn,
    header__tools,
    logIn,
    langIcon,
    loginIcon,
    hero,
    hero__container,
    hero__title,
    hero__dicription,
    hero__label,
    hero__input,
    searchBtn,
    titleAccent,
    hero__titleBox,
    slideShow,
    slideShow__phone,
    header__elipse,
    hero__searchIconBtn,
    hero__searchIcon,
    slideShow__topList,
    slideShow__topItem,
    slideShow__topWrapper,
    slideShow__bottomWrapper,
    slideShow__bottomItem,
  } = styles;
  const { src, alt } = topSlides;
  return (
    <header className={header}>
      <div className={header__topLine}>
        <Logo />
        <Navigation />
        <div className={header__tools}>
          <Button btnClass={langSelectBtn}>
            <svg className={langIcon} width="17" height="17">
              <use href={svgSprite + "#lang"}></use>
            </svg>
            English
          </Button>
          <ButtonStyleLink linkClass={logIn}>
            <svg className={loginIcon} width="14" height="18">
              <use href={svgSprite + "#login"}></use>
            </svg>
            Log in
          </ButtonStyleLink>
        </div>
      </div>
      <section className={hero}>
        <Container containerClass={hero__container}>
          <div className={hero__titleBox}>
            <h1 className={hero__title}>
              Stay <span className={titleAccent}>connected</span> wherever you
              go
            </h1>
            <p className={hero__dicription}>
              Buy an international eSIM card, stay connected wherever you go,
              and avoid expensive phone bills
            </p>
            <label className={hero__label} htmlFor="">
              <IconButton className={hero__searchIconBtn}>
                <svg className={hero__searchIcon} width="25" height="25">
                  <use href={svgSprite + "#search"}></use>
                </svg>
              </IconButton>
              <input
                placeholder="Where do you need internet?"
                className={hero__input}
                type="text"
              />
              <Button btnClass={searchBtn}>Search</Button>
            </label>
          </div>
          <div className={slideShow}>
            <img
              className={slideShow__phone}
              width="508"
              height="auto"
              src={phoneImg}
              alt="phone slide-show"
            />

            <div className={slideShow__topWrapper}>
              <ul className={slideShow__topList}>
                {topSlides.map(({ src, alt, id }) => {
                  return (
                    <li key={id} className={slideShow__topItem}>
                      <img loading="lazy" src={src} alt={alt} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <Carousel
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              responsive={bottomSliderResponsive}
              removeArrowOnDeviceType={["tablet", "mobile", "desctop"]}
              containerClass={slideShow__bottomWrapper}
              itemClass={slideShow__bottomItem}
            >
              {bottomSlides.map(({ src, alt, id }) => {
                return (
                  <div key={id}>
                    <img
                      clas
                      width="220"
                      height="auto"
                      loading="lazy"
                      src={src}
                      alt={alt}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Container>
      </section>
      <div className={header__elipse}></div>
    </header>
  );
};

export default Header;
