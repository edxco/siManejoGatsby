import { Typography, useTheme } from "@mui/material";
import React from "react";
import { FlexContainerCenter, HorizontalBar } from "..";
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

const TitleAndSubtitle = (props: ITitleAndSubtitleProps) => {
  const theme = useTheme();

  return (
    <FlexContainerCenter
      maxWidth="1280px"
      columnDirection
      margin={props.margin}
    >
      <TextUnderline
        underlineColor={theme.siManejoSecondary.main}
        variant="h3"
        fontWeight={800}
        align="center"
        color={props.titleColor ? props.titleColor : theme.siManejoPrimary.main}
      >
        {props.title}
      </TextUnderline>
      {/* {props.disableHorizontalBar ? null : <HorizontalBar />} */}
      {props.subtitle ? (
        <Typography
          variant="h6"
          fontWeight={400}
          align="center"
          color={theme.grayScale.dark}
          sx={{ mt: 2 }}
        >
          {props.subtitle}
        </Typography>
      ) : null}
    </FlexContainerCenter>
  );
};

export default TitleAndSubtitle;
