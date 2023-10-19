import React from "react";
import { INumerosContacto } from "../../atoms/types";
import theme from "../../theme";
import {
  FlexContainerCenter,
  FooterBlogList,
  FooterBranchList,
} from "../../atoms";
import { webSizes } from "../../constants";
import styled from "@emotion/styled";
import { useTableOrMobile } from "../../hooks";

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
  blogs: Array<{ node: { createdAt: string; titulo: string } }>;
}

const MainContainer = styled.div(({ mobileSize }: { mobileSize: boolean }) => ({
  width: "100%",
  maxWidth: webSizes.maxWidth,
  margin: mobileSize ? "20px 15px 0 0" : "20px 0",
  padding: 0,
  backgroundColor: theme.backGroundColors.dark,
  display: "flex",
  flexDirection: mobileSize ? 'column' : 'row',
}));

const MainFooter = (props: IMainFooter) => {
  const [mobileSize, tabletSize] = useTableOrMobile();

  return (
    <FlexContainerCenter bgColor={theme.backGroundColors.dark}>
      <MainContainer mobileSize={mobileSize}>
        <FooterBranchList title={"Sucursales"} branches={props.schoolData} />
        <FooterBlogList title={"Últimos blogs"} latestBlogs={props.blogs} />
      </MainContainer>
    </FlexContainerCenter>
  );
};

export default MainFooter;
