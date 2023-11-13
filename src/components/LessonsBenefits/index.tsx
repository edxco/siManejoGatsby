import React from "react";
import { BaseCenterContainer, FlexContainerCenter, MaxWidthContainer } from "../../atoms";
import styled from "@emotion/styled";
import { useTableOrMobile } from "../../hooks";
import { useTheme } from "@mui/material";

const MainContainer = styled(BaseCenterContainer)(
  ({ bgColor }: { bgColor: string }) => ({
    width: "100%",
    margin: 0,
    padding: "60px 0",
    backgroundColor: bgColor,
    marginTop: "60px",
  })
);

const LessonsBenefits = () => {
  const [mobileSize, tabletSize] = useTableOrMobile();
  const theme = useTheme();

  return (
    <FlexContainerCenter>
      <MaxWidthContainer isMobile={mobileSize || tabletSize}>
        Benefits lessons
        <div style={{height: '300px'}}>asdasd</div>
      </MaxWidthContainer>
    </FlexContainerCenter>
  );
};

export default LessonsBenefits;
