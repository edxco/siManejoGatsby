import React from "react";
import { INumerosContacto } from "../../atoms/types";
import theme from "../../theme";
import { FlexContainerCenter, FooterBranchList } from "../../atoms";
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

const MainContainer = styled.div(() => ({
  width: "100%",
  maxWidth: webSizes.maxWidth,
  margin: '20px 0',
  padding: 0,
  backgroundColor: theme.backGroundColors.dark,
  display: "flex",
}));

const MainFooter = (props: IMainFooter) => {
console.log('props', props)
  return (
    <FlexContainerCenter bgColor={theme.backGroundColors.dark}>
      <MainContainer>
        <FooterBranchList title={"Sucursales"} data={props.schoolData} />
      </MainContainer>
    </FlexContainerCenter>
  );
};

export default MainFooter;
