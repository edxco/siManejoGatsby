import styled from "@emotion/styled";
import React from "react";

interface IResponsiveContainer {
  $padded?: boolean;
  $bottomLeft?: boolean;
  $bottom?: boolean;
  $fullHeight?: boolean;
  $flexDirection?: "column" | "row";
  $children?: React.ReactNode;
  $maxWidth?: string;
}

const ResponsiveContainer = styled.div((props: IResponsiveContainer) => {
  const {$flexDirection = 'column'} = props
  return {
    width: "95%",
    height: props.$fullHeight ? "100%" : "auto",
    display: "flex",
    flexDirection: $flexDirection,
    alignItems: props.$bottomLeft
      ? "flex-start"
      : props.$bottom
      ? "flex-end"
      : "center",
    justifyContent: props.$bottomLeft ? "flex-end" : "center",
    maxWidth: props.$maxWidth ? props.$maxWidth : "1280px",
  };
});

export default ResponsiveContainer;
