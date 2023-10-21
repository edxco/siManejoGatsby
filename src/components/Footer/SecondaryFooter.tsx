import React from "react";
import { INumerosContacto } from "../../atoms/types";
import theme from "../../theme";
import { FlexContainerCenter } from "../../atoms";
import { webSizes } from "../../constants";
import styled from "@emotion/styled";
import { useTableOrMobile } from "../../hooks";
import { IFooterBlog, ILink } from ".";
import { Typography } from "@mui/material";

export interface ISchoolData {
  node: {
    id: string;
    sucursal: string;
    slug: string;
    numerosContacto: INumerosContacto;
  };
}

interface ISecondaryFooter {
  schoolData: Array<ISchoolData>;
  blogs: Array<{ node: IFooterBlog }>;
  footerData: { description: string; link: Array<ILink> };
}

const MainContainer = styled.div(
  ({
    mobileSize,
    tabletSize,
  }: {
    mobileSize: boolean;
    tabletSize: boolean;
  }) => ({
    width: "100%",
    maxWidth: webSizes.maxWidth,
    padding: 0,
    display: "flex",
    flexDirection: mobileSize ? "column" : "row",
    justifyContent: mobileSize || tabletSize ? "center" : "space-between",
    alignItems: mobileSize ? "center" : "flex-start",
    flexWrap: "wrap",
    marginBottom: mobileSize || tabletSize ? '30px' : "0",
    gap: mobileSize || tabletSize ? 30 : 0,
  })
);

const SecondaryFooter = () => {
  const [mobileSize, tabletSize] = useTableOrMobile();

  return (
    <FlexContainerCenter bgColor={theme.siManejoPrimary.light}>
      <MainContainer mobileSize={mobileSize} tabletSize={tabletSize}>
        <Typography
          variant="body1"
          fontWeight={400}
          align="center"
          color={"white"}
          margin={mobileSize ? "20px 30px 0 30px" : "20px 0"}
        >
          Creado y programado con pasión por{" "}
          <span
            style={{ fontWeight: 900, color: theme.siManejoTertiary.light }}
          >
            Taquito Partners
          </span>{" "}
          🇲🇽
        </Typography>
        <Typography
          variant="caption"
          fontWeight={400}
          align="center"
          color={"white"}
          margin={mobileSize ? 0 : "20px 0"}
        >
          © Copyright <span style={{ fontWeight: 900 }}>Si Manejo</span> 2014-
          {new Date().getFullYear()}
        </Typography>
        {/* <div style={{height: mobileSize || tabletSize ? '10px' : 0}} /> */}
      </MainContainer>
    </FlexContainerCenter>
  );
};

export default SecondaryFooter;
