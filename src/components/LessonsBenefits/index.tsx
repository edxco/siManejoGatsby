import React from "react";
import {
  BaseCenterContainer,
  FlexContainerCenter,
  MaxWidthContainer,
  SubtitleAndTitle,
} from "../../atoms";
import styled from "@emotion/styled";
import { useAPIURL, useTableOrMobile } from "../../hooks";
import { Avatar, Paper, Typography, useTheme } from "@mui/material";
import { ILessonsBenefits } from "../../atoms/types/cities";

const BenefitsContainer = styled(BaseCenterContainer)(() => ({
  width: "100%",
  padding: "60px 0",
  margin: "20px 0 80px 0",
  flexWrap: "wrap",
  gap: 30,
}));

const BenefitCard = styled(Paper)(({ bgColor, isMobile }: { bgColor: string, isMobile: boolean }) => ({
  width: "30%",
  maxWidth: "450px",
  minWidth: isMobile ? '350px' : '260px',
  margin: 0,
  padding: "25px",
  backgroundColor: bgColor,
  borderRadius: '16px',
}));

const LessonsBenefits = (props: ILessonsBenefits) => {
  const [mobileSize, tabletSize] = useTableOrMobile();
  const API_URL = useAPIURL();
  const theme = useTheme();

  return (
    <FlexContainerCenter bgColor={theme.backGroundColors.main}>
      <MaxWidthContainer isMobile={mobileSize || tabletSize}>
        <SubtitleAndTitle
          subtitle="¿Porque Si Manejo?"
          title={props.titulo}
          margin="80px 0 15px 0"
        />
        <BenefitsContainer>
          {props.caracteristicaDetalle.map((benefit) => {
            return (
              <BenefitCard elevation={0} bgColor={"white"} isMobile={mobileSize}>
                {mobileSize || tabletSize ? (
                  <Avatar
                    variant="rounded"
                    sx={{ width: 70, height: 70, margin: "0 auto 15px auto" }}
                    alt={`Imagen - ${benefit.titulo}`}
                    src={
                      API_URL +
                      benefit.imagen.localFile.childImageSharp.gatsbyImageData
                        .images.fallback.src
                    }
                  />
                ) : null}
                <Typography
                  variant="h6"
                  component={"div"}
                  fontWeight={600}
                  align={mobileSize || tabletSize ? "center" : "left"}
                  color={theme.siManejoTertiary.dark}
                  sx={{ mb: 0.5, lineHeight: "28px" }}
                >
                  {benefit.titulo}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      mobileSize || tabletSize ? "center" : "space-between",
                    alignItems: "flex-start",
                    marginTop: "20px",
                  }}
                >
                  {mobileSize || tabletSize ? null : (
                    <Avatar
                      variant="rounded"
                      sx={{ width: 56, height: 56, mt: 0.5 }}
                      alt={`Imagen - ${benefit.titulo}`}
                      src={
                        API_URL +
                        benefit.imagen.localFile.childImageSharp.gatsbyImageData
                          .images.fallback.src
                      }
                    />
                  )}
                  <Typography
                    variant="body1"
                    component={"div"}
                    fontWeight={400}
                    align={mobileSize || tabletSize ? "center" : "justify"}
                    color={theme.siManejoTertiary.main}
                    sx={{ ml: mobileSize || tabletSize ? 0 : 2.5 }}
                  >
                    {benefit.descripcion}
                  </Typography>
                </div>
              </BenefitCard>
            );
          })}
        </BenefitsContainer>
      </MaxWidthContainer>
    </FlexContainerCenter>
  );
};

export default LessonsBenefits;
