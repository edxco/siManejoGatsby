import React, { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { IImageDefault, ISchoolBanner } from "../types/cities";
import styled from "@emotion/styled";
import { webSizes } from "../../constants";
import { BaseCenterContainer } from "./DivContainers";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useOnScreen } from "../../hooks";

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

const UpperText = styled(Typography)(() => ({
  opacity: 0.0,
  color: "white",
  fontWeight: 100,
  fontSize: "22px",
  margin: "0 0 8px 0",
  padding: 0,
  lineHeight: 0,
}));

const MainText = styled(Typography)(() => ({
  opacity: 0.0,
  color: "white",
  fontWeight: 800,
  fontSize: "64px",
  margin: 0,
  padding: 0,
}));

const LowerText = styled(Typography)(() => ({
  opacity: 0.0,
  color: "rgb(203, 22, 27)",
  fontWeight: 400,
  fontSize: "20px",
  backgroundColor: "white",
  padding: "5px 15px",
  marginTop: "10px",
}));

const SlideImage = (props: ISchoolBanner) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <CarouselContainer bgImage={props.bgImage}>
      <UpperText
        ref={ref}
        style={
          isVisible ? { transition: "opacity 1s ease-in", opacity: 1 } : {}
        }
      >
        {props.topTitle.toUpperCase()}
      </UpperText>
      <MainText
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
      >
        {props.title.toUpperCase()}
      </MainText>
      <LowerText
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
