import React from "react";
import { INumerosContacto } from "../../atoms/types";
import theme from "../../theme";
import {
  FlexContainerCenter,
  FooterBlogList,
  FooterBranchList,
  FooterList,
  SiManejoData,
} from "../../atoms";
import { webSizes } from "../../constants";
import styled from "@emotion/styled";
import { useTableOrMobile } from "../../hooks";
import { IFooterBlog, ILink } from ".";

export interface ISchoolData {
  node: {
    id: string;
    sucursal: string;
    slug: string;
    numerosContacto: INumerosContacto;
  };
}

interface IMainFooter {
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
    margin: mobileSize || tabletSize ? "20px 15px 0 0" : "20px 0",
    padding: 0,
    display: "flex",
    flexDirection: mobileSize ? "column" : "row",
    justifyContent: mobileSize || tabletSize ? "center" : "space-between",
    alignItems: mobileSize ? "center" : "flex-start",
    flexWrap: "wrap",
    marginBottom: mobileSize || tabletSize ? "30px" : 0,
    gap: mobileSize || tabletSize ? 30 : 0,
  })
);

const ColumnsFooter = styled.div(
  ({
    mobileSize,
    tabletSize,
  }: {
    mobileSize: boolean;
    tabletSize: boolean;
  }) => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexDirection: mobileSize || tabletSize ? "column" : "row",
  })
);

const MainFooter = (props: IMainFooter) => {
  const [mobileSize, tabletSize] = useTableOrMobile();
  
  return (
    <FlexContainerCenter bgColor={theme.backGroundColors.dark} padding={'10px 0 50px 0'}>
      <MainContainer mobileSize={mobileSize} tabletSize={tabletSize}>
        <SiManejoData brief={props.footerData.description} />
        <ColumnsFooter mobileSize={mobileSize} tabletSize={tabletSize}>
          <FooterBranchList title={"Sucursales"} branches={props.schoolData} />
          <FooterList title={"Si Manejo"} listData={props.footerData.link} />
          <FooterBlogList title={"Últimos blogs"} latestBlogs={props.blogs} />
        </ColumnsFooter>
      </MainContainer>
    </FlexContainerCenter>
  );
};

export default MainFooter;
