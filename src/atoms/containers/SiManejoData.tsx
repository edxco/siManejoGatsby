import React from "react";
import Logo from "../../images/siManejo-blanco.png";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

interface ISiManejoData {
  brief: string;
}

const MainContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  maxWidth: "300px",
  minWidth: "300px",
  marginTop: "20px",
}));

const SiManejoData = (props: ISiManejoData) => {
  return (
    <MainContainer>
      <img
        src={Logo}
        alt="Si Manejo Logo"
        style={{ width: "100%", maxWidth: "240px" }}
      />
      <Typography
        variant="body1"
        fontWeight={400}
        align="left"
        color={"white"}
        margin={"20px 20px 0 0"}
        lineHeight={'24px'}
      >
        {props.brief}
      </Typography>
    </MainContainer>
  );
};

export default SiManejoData;
