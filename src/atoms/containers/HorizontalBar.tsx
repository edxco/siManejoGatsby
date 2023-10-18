import styled from "@emotion/styled";
import React from "react";

const HorizontalContainer = styled.div(({ theme }) => ({
  height: "7px",
  backgroundColor: theme.siManejoSecondary.main,
  width: "100px",
  marginTop: "13px",
}));

const HorizontalBar = () => {
  return <HorizontalContainer />;
};

export default HorizontalBar;
