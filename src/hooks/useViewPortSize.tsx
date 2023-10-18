import { useMediaQuery } from "react-responsive";

// 360x800 //Android Chrome
// 375x667 //Iphone safari
// 375x812 //Iphone safari
// 390x844 //Iphone safari
// 412x869 //Android Chrome
// 412x915 //Android Chrome
// 414x896 //Iphone safari
// 428x926 //Iphone safari
// 768x1024 //Iphone safari
// 1920x1080 //Desktop Chrome

// Viewport Chart:
// 1440x900(Large desktop)
// 1280x960(Regular desktop)
// 1024x768 (Small Desktop)
// 800x600 (Tablet)
// 414x896(Mobile)
// 320 x 568 (Small Mobile)

export default () => {
  return [
    // useMediaQuery({ query: "(max-width: 360px)" }), //w360
    // useMediaQuery({ query: "(min-width: 375px) and (max-width: 389px)" }), //w375
    // useMediaQuery({ query: "(min-width: 390px) and (max-width: 411px)" }), //w390
    // useMediaQuery({ query: "(min-width: 412px) and (max-width: 313px)" }), //w412
    // useMediaQuery({ query: "(min-width: 414px) and (max-width: 427px)" }), //w414
    // useMediaQuery({ query: "(min-width: 428px) and (max-width: 767px)" }), //w428
    // useMediaQuery({ query: "(min-width: 900px) and (max-width: 1280px)" }), //w768
    useMediaQuery({ query: "(min-width: 20px) and (max-width: 425px)" }), //mobileSize
    useMediaQuery({ query: "(min-width: 424px) and (max-width: 800px)" }), //tabletSize
    useMediaQuery({ query: "(max-width: 899px)" }), //isMobileFix
    // useMediaQuery({ query: "(min-width: 1920px)" }), //w1920
    // useMediaQuery({ query: "(min-width: 1440px) and (max-width: 2559px)" }), //isNormal
    // useMediaQuery({ query: "(min-width: 2560px) and (max-width: 3000px)" }), //isLarge
  ];
};
