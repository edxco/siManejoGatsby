import React from "react";
import { Typography, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import {
  FlexContainerCenter,
  IconAndTitle,
  TitleAndSubtitle,
} from "../../atoms";
import { IBeneficios } from "../../atoms/types";
import { useTableOrMobile } from "../../hooks";

const FeatureSection = styled.div(
  ({
    bgColor,
    mobileSize,
    tabletSize,
  }: {
    bgColor: string;
    mobileSize: boolean;
    tabletSize: boolean;
  }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: 50,
    padding: mobileSize || tabletSize ? "60px 25px" : "60px 0",
    paddingBottom: "400px",
    backgroundColor: bgColor,
    flexWrap: "wrap",
  })
);

const Features = (props: IBeneficios) => {
  const theme = useTheme();
  const [mobileSize, tabletSize] = useTableOrMobile();
  
  return (
    <FeatureSection
      bgColor={theme.backGroundColors.light}
      mobileSize={mobileSize}
      tabletSize={tabletSize}
    >
      <TitleAndSubtitle title={"Nuestras Ventajas"} />
      <FlexContainerCenter maxWidth="1280px">
        {props.beneficios.map((item, index) => (
          <IconAndTitle
            title={item.titulo}
            imageUrl={
              item.icono.localFile.childImageSharp.gatsbyImageData.images
                .fallback.src
            }
            mobileSize={mobileSize}
            tabletSize={tabletSize}
            key={index}
          />
        ))}
      </FlexContainerCenter>
    </FeatureSection>
  );
};

export default Features;
