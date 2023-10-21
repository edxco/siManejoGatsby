import styled from "@emotion/styled";
import { Link, LinkProps } from "@mui/material";
import { ReactNode } from "react";

export const FlexContainerCenter = styled.div(
  ({
    bgColor,
    mobileSize,
    tabletSize,
    maxWidth,
    columnDirection,
    margin,
    padding,
    height,
  }: {
    bgColor?: string;
    mobileSize?: boolean;
    tabletSize?: boolean;
    maxWidth?: string;
    columnDirection?: boolean;
    margin?: string;
    padding?: string;
    height?: string;
  }) => ({
    display: "flex",
    flexDirection: columnDirection ? "column" : "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: height ? height : "auto",
    maxWidth: maxWidth ? maxWidth : "auto",
    backgroundColor: bgColor ? bgColor : "transparent",
    flexWrap: "wrap",
    padding: padding ? padding : 0,
    margin: margin ? margin : 0,
  })
);

interface ICustomLink extends LinkProps {
  hoverColor: string;
  hoverUnderline?: boolean;
}

export const CustomLink = styled(Link)((props: ICustomLink) => ({
  transitionProperty: 'color',
  transitionDuration: '0.5s',
  ":hover": {
    color: props.hoverColor,
    textDecoration: props.hoverUnderline ? "underline" : "none",
  },
}));
