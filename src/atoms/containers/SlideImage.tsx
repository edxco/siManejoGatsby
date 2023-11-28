import React, { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { IImageDefault, ISchoolBanner } from "../types/cities";
import styled from "@emotion/styled";
import { webSizes } from "../../constants";
import { BaseCenterContainer } from "./DivContainers";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useOnScreen, useTableOrMobile } from "../../hooks";

interface IContainerProps {
  bgImage: IImageDefault;
}

const CarouselContainer = styled(BaseCenterContainer)(
  (props: IContainerProps) => ({
    // maxWidth: webSizes.maxWidth,
    width: "100%",
    backgroundImage: `url(${props.bgImage})`,
    backgroundColor: "cover",
    backgroundPosition: "center",
    height: "380px",
    flexDirection: "column",
    alignItems: "center",
  })
);

interface ContainersProps {
  mobile: boolean;
  tablet: boolean;
}
const UpperText = styled(Typography)((props: ContainersProps) => ({
  opacity: 0.0,
  color: "white",
  fontWeight: 100,
  fontSize: props.mobile ? "20px" : props.tablet ? "21px" : "22px",
  margin: "0 0 8px 0",
  padding: 0,
  lineHeight: 0,
  flexWrap: "wrap",
}));

const MainText = styled(Typography)((props: ContainersProps) => ({
  opacity: 0.0,
  color: "white",
  fontWeight: 800,
  fontSize: props.mobile ? "34px" : props.tablet ? "44px" : "64px",
  margin: props.mobile ? "0 35px" : 0,
  padding: 0,
}));

const LowerText = styled(Typography)((props: ContainersProps) => ({
  opacity: 0.0,
  color: "rgb(203, 22, 27)",
  fontWeight: 400,
  fontSize: props.mobile || props.tablet ? "16px" : "20px",
  backgroundColor: "white",
  padding: "5px 15px",
  marginTop: "10px",
  maxWidth: props.mobile || props.tablet ? "300px" : "auto",
  textAlign: "center",
}));

const SlideImage = (props: ISchoolBanner) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mobileSize, tabletSize] = useTableOrMobile();
  const isVisible = useOnScreen(ref);

  return (
    <CarouselContainer bgImage={props.bgImage}>
      <UpperText
        ref={ref}
        style={
          isVisible ? { transition: "opacity 1s ease-in", opacity: 1 } : {}
        }
        mobile={mobileSize}
        tablet={tabletSize}
      >
        {props.topTitle.toUpperCase()}
      </UpperText>
      <MainText
        align="center"
        ref={ref}
        style={
          isVisible
            ? {
                transition: "opacity 1.2s ease-in",
                transitionDelay: "0.6s",
                opacity: 1,
              }
            : {}
        }
        mobile={mobileSize}
        tablet={tabletSize}
      >
        {props.title.toUpperCase()}
      </MainText>
      <LowerText
        mobile={mobileSize}
        tablet={tabletSize}
        ref={ref}
        style={
          isVisible
            ? {
                transition: "opacity 1.2s ease-in",
                transitionDelay: "1.2s",
                opacity: 1,
              }
            : {}
        }
      >
        {props.bottomTitle.toUpperCase()}
      </LowerText>
    </CarouselContainer>
  );
};

export default SlideImage;
