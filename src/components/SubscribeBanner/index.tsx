import React from "react";
import { FlexContainerCenter, VideoBg } from "../../atoms";
import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { ICtaBanner } from "../../atoms/types";
import { useAPIURL, useTableOrMobile } from "../../hooks";

const SubscribeBanner = (props: ICtaBanner) => {
  const theme = useTheme();
  const API_URL = useAPIURL();
  const [mobileSize, tabletSize] = useTableOrMobile();

  return (
    <FlexContainerCenter height={"350px"}>
      <VideoBg videoUrl={API_URL + props.media.localFile.publicURL}>
        <Typography
          variant="h3"
          component={"h1"}
          fontWeight={600}
          align="center"
          color={"white"}
          margin={"20px"}
        >
          {props.titulo}
        </Typography>
        <Button
          variant="contained"
          size={mobileSize || tabletSize ? "medium" : "large"}
          sx={{
            mb: 4,
            borderRadius: "30px",
            color: "white",
            backgroundColor: theme.siManejoSecondary.main,
          }}
        >
          {props.subTitulo}
        </Button>
      </VideoBg>
    </FlexContainerCenter>
  );
};

export default SubscribeBanner;
