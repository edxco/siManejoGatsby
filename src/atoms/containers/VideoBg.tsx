import styled from "@emotion/styled";
import React, { ReactElement, ReactNode } from "react";
import { webSizes } from "../../constants";
import { useTheme } from "@emotion/react";
import { useAPIURL } from "../../hooks";
import { Props } from "@mdx-js/react/lib";

const Banner = styled.div(() => ({
  maxWidth: webSizes.maxWidth,
  width: "100%",
  margin: "40px auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  zIndex: 2,
}));

const ContainerOverlay = styled.div(({ bgColor }: { bgColor: string }) => ({
  backgroundColor: bgColor,
  opacity: 0.5,
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 1,
}));

interface IVideos {
    videoUrl: string;
    children: ReactNode;
}

const VideoBg = (props: IVideos) => {
  const theme = useTheme();
  
  return (
    <>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <video
          controls={false}
          loop
          style={{
            width: " 100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
          autoPlay
          muted
          playsInline
        >
          <source
            src={props.videoUrl}
            type="video/mp4"
          />
        </video>
        <ContainerOverlay bgColor={theme.siManejoPrimary.main} />
      </div>
      <Banner>{props.children}</Banner>
    </>
  );
};

export default VideoBg;
