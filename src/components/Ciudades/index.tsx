import React, { useEffect } from "react";
import { useTheme } from "@mui/material";
import { useTableOrMobile } from "../../hooks";
import styled from "@emotion/styled";
import TextTransition, { presets } from "react-text-transition";
import { ButtonWithImage } from "../../atoms";
import { IEscuelas } from "../../atoms/types";
import Logo from "../../images/simanejoLogo.png";

const MainContainer = styled.div(() => ({
  padding: "100px 0",
}));

const CenteredContainer = styled.div(({ bgColor }: { bgColor: string }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // maxWidth: '1280px',
  backgroundColor: bgColor,
}));

const WordRotate = styled.div(
  ({
    $color,
    mobileSize,
    tabletSize,
  }: {
    $color: string;
    mobileSize: boolean;
    tabletSize: boolean;
  }) => ({
    marginTop: "10px",
    display: "flex",
    gap: 5,
    fontSize: mobileSize ? "105%" : tabletSize ? "20px" : "24px",
    fontWeight: 400,
    color: $color,
  })
);

const CardsContainers = styled.div(
  ({ mobileSize, tabletSize }: { mobileSize: boolean; tabletSize: boolean }) => ({
    marginTop: "40px",
    padding: mobileSize || tabletSize ? "30px 10px" : "30px 0",
    display: "flex",
    gap: 30,
    justifyContent: "center",
    flexWrap: "wrap",
  })
);

const Ciudades = (props: IEscuelas) => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [mobileSize, tabletSize] = useTableOrMobile();

  const TEXTS = [
    "desde tu casa",
    "desde tu oficina",
    "con expertos",
    "sin estrés",
    "en estandar",
    "seguro",
    "en automático",
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <MainContainer>
      <CenteredContainer bgColor="transparent">
        <img
          src={Logo}
          alt="Si Manejo Logo"
          style={{ width: "75%", maxWidth: "340px" }}
        />

        <WordRotate
          $color={theme.siManejoTertiary.main}
          mobileSize={mobileSize}
          tabletSize={tabletSize}
        >
          Aprender a manejar
          <TextTransition
            springConfig={presets.wobbly}
            style={{ color: theme.siManejoSecondary.main, fontWeight: 700 }}
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </WordRotate>
      </CenteredContainer>

      <CardsContainers mobileSize={mobileSize} tabletSize={tabletSize}>
        {props.edges.map((escuela) => (
          <ButtonWithImage
            slug={escuela.node.slug}
            id={escuela.node.id}
            title={escuela.node.sucursal}
            key={escuela.node.id}
            image={
              escuela.node.bgBoton.localFile.childImageSharp.gatsbyImageData
                .images.fallback.src
            }
            mobileSize={mobileSize}
          />
        ))}
      </CardsContainers>
    </MainContainer>
  );
};

export default Ciudades;
