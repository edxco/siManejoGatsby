import * as React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardMedia, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useAPIURL } from "../../hooks";
import { Link } from "gatsby";

const CardContentContainer = styled(Link)(
  ({
    bgColor,
    bgColor2,
    mobileSize,
  }: {
    bgColor: string;
    bgColor2: string;
    mobileSize: boolean;
  }) => ({
    display: "flex",
    justifyContent: mobileSize ? "flex-start" : "center",
    alignItems: "center",
    borderRadius: "40px",
    backgroundColor: bgColor,
    padding: "10px 25px",
    cursor: "pointer",
    width: mobileSize ? "85%" : "auto",
    textDecoration: 'none',
    ":hover": {
      backgroundColor: bgColor2,
    },
  })
);

interface ICardEscuela {
  slug: string;
  id: string;
  title: string;
  image: string;
  whatsapp: string;
  mobileSize?: boolean;
}

export default function ButtonWithImage(props: ICardEscuela) {
  const theme = useTheme();
  const API_URL = useAPIURL();

  return (
    <CardContentContainer
      bgColor={theme.backGroundColors.main}
      bgColor2={theme.grayScale.light}
      mobileSize={props.mobileSize}
      key={props.title}
      to={`/${props.slug}`}
    >
      <Avatar alt="Remy Sharp" src={API_URL + props.image} />
      <Typography
        variant="h6"
        component="a"
        fontWeight={700}
        color={theme.siManejoPrimary.main}
        align="left"
        lineHeight={"25px"}
        style={{ textDecoration: "none", marginLeft: "15px" }}
      >
        {props.title}
      </Typography>
    </CardContentContainer>
  );
}
