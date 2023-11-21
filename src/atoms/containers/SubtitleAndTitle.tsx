import { Typography, useTheme } from "@mui/material";
import React from "react";
import { FlexContainerCenter } from "..";
import styled from "@emotion/styled";

interface ITitleAndSubtitleProps {
  title: string;
  subtitle?: string;
  margin?: string;
  titleColor?: string;
  disableHorizontalBar?: boolean;
}

const TextUnderline = styled(Typography)(
  ({ underlineColor }: { underlineColor: string }) => ({
    textDecoration: "underline",
    textDecorationSkipInk: "auto",
    textDecorationThickness: "8px",
    textDecorationColor: underlineColor,
  })
);

const SubtitleAndTitle = (props: ITitleAndSubtitleProps) => {
  const theme = useTheme();

  return (
    <FlexContainerCenter
      maxWidth="1280px"
      columnDirection
      margin={props.margin}
    >
      <Typography
        variant="body1"
        component={'h2'}
        fontWeight={600}
        align="center"
        color={theme.siManejoSecondary.main}
        sx={{ mt: 2 }}
      >
        {props.subtitle?.toUpperCase()}
      </Typography>
      <Typography
        variant="h3"
        component={'h1'}
        fontWeight={800}
        align="center"
        color={props.titleColor ? props.titleColor : theme.siManejoTertiary.main}
      >
        {props.title}
      </Typography>
    </FlexContainerCenter>
  );
};

export default SubtitleAndTitle;
