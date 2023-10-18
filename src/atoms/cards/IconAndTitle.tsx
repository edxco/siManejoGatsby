import * as React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useAPIURL } from "../../hooks";
import { Paper } from "@mui/material";

const Feature = styled(Paper)(
  ({
    mobileSize,
    tabletSize,
  }: {
    mobileSize?: boolean;
    tabletSize?: boolean;
  }) => ({
    display: "flex",
    gap: 15,
    width: "100%",
    maxWidth: mobileSize ? "100%" : "140px",
    height: "100%",
    flexDirection: mobileSize ? "row" : "column",
    justifyContent: mobileSize ? "flex-start" : "space-between",
    alignItems: "center",
    padding: "12px",
    borderRadius: "14px",
    backgroundColor: "white",
    margin: mobileSize ? "15px 10px" : "30px 10px",
  })
);

const ImageIcon = styled.img(({ theme }) => ({
  width: "36px",
  height: "36px",
}));

const CircleContainer = styled.div(() => ({
  width: "60px",
  height: "60px",
  backgroundColor: "white",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

interface ICardIconAndTitle {
  title: string;
  imageUrl: string;
  mobileSize: boolean;
  tabletSize: boolean;
}

export default function IconAndTitle(props: ICardIconAndTitle) {
  const theme = useTheme();
  const API_URL = useAPIURL();

  return (
    <Feature elevation={24} mobileSize={props.mobileSize} tabletSize={props.tabletSize}>
      <CircleContainer>
        <ImageIcon src={API_URL + props.imageUrl} alt={props.title} />
      </CircleContainer>
      <div style={{ height: props.mobileSize ?  "auto" : "60px" }}>
        <Typography
          variant="subtitle1"
          component="div"
          fontWeight={600}
          align="center"
          sx={{ lineHeight: "19px", color: theme.grayScale.dark }}
        >
          {props.title}
        </Typography>
      </div>
    </Feature>
  );
}
