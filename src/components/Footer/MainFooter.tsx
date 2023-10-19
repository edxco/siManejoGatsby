import React from "react";
import { INumerosContacto } from "../../atoms/types";
import theme from "../../theme";
import {
  FlexContainerCenter,
  FooterBlogList,
  FooterBranchList,
  FooterList,
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
  footerLink: Array<ILink>;
}

const MainContainer = styled.div(({ mobileSize, tabletSize }: { mobileSize: boolean, tabletSize: boolean }) => ({
  width: "100%",
  maxWidth: webSizes.maxWidth,
  margin: (mobileSize || tabletSize) ? "20px 15px 0 0" : "20px 0",
  padding: 0,
  backgroundColor: theme.backGroundColors.dark,
  display: "flex",
  flexDirection: (mobileSize || tabletSize) ? "column" : "row",
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: (mobileSize || tabletSize) ? '30px' : 0,
}));

const MainFooter = (props: IMainFooter) => {
  const [mobileSize, tabletSize] = useTableOrMobile();

  return (
    <FlexContainerCenter bgColor={theme.backGroundColors.dark}>
      <MainContainer mobileSize={mobileSize} tabletSize={tabletSize}>
        <FooterBranchList title={"Sucursales"} branches={props.schoolData} />
        <FooterList title={"Si Manejo"} listData={props.footerLink} />
        <FooterBlogList title={"Últimos blogs"} latestBlogs={props.blogs} />
      </MainContainer>
    </FlexContainerCenter>
  );
};

export default MainFooter;
