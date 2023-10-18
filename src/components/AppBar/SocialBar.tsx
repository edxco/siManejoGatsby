import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useViewPortSize } from "../../hooks";
import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ResponsiveContainer from "../../atoms/containers/ResponsiveContainer";
import TwitterIcon from "../../assets/twitter.svg";
import FacebookIcon from "../../assets/fb.svg";
import InstagramIcon from "../../assets/instagram.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import TiktokIcon from "../../assets/tiktok.svg";

export interface ISocialMediaLinks {
  strapiSocialMediaLinks: StrapiSocialMediaLinks;
}
export interface StrapiSocialMediaLinks {
  Facebook: string;
  Instagram: string;
  Twitter: string;
  Youtube: string;
}

const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.siManejoPrimary.main,
  display: 'flex',
  justifyContent: 'center',
}));

const ButtonWithIcon = styled(IconButton)(({ theme }) => ({
  marginRight: '3px',
  width: '38px',
}));

interface ISocialBarProps {
  isTabletOrMobile: boolean;
  hide: boolean;
}

export default (props: ISocialBarProps) => {
  const { isTabletOrMobile = false, hide } = props;
  const [mobileSize, tabletSize, isMobileFix] = useViewPortSize();
  const iconStyle = css`fill: white;`
  // RENDER
  return !hide ? (
    <Container aria-label={"Social Media Menu"}>
      <ResponsiveContainer aria-label={"Social Media Menu"} $maxWidth="1500px" $flexDirection="row">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            // marginLeft: isMobileFix ? "15px" : "35px",
          }}
          aria-label={"Social Media Menu"}
        >
          <ButtonWithIcon color="secondary" aria-label="Si Manejo Twitter">
            <TwitterIcon style={{ stroke: "white" }} />
          </ButtonWithIcon>
          <ButtonWithIcon color="secondary" aria-label="Si Manejo Facebook">
            <FacebookIcon style={{ stroke: "white" }} />
          </ButtonWithIcon>
          <ButtonWithIcon color="secondary" aria-label="Si Manejo Instagram">
            <InstagramIcon style={{ stroke: "white" }} />
          </ButtonWithIcon>
          <ButtonWithIcon color="secondary" aria-label="Si Manejo Youtube">
            <YoutubeIcon style={{ stroke: "white" }} />
          </ButtonWithIcon>
          <ButtonWithIcon color="secondary" aria-label="Si Manejo Tiktok">
            <TiktokIcon style={{ stroke: "white" }} />
          </ButtonWithIcon>
        </div>
        <div>
          asdasd
        </div>
      </ResponsiveContainer>
    </Container>
  ) : null;
};
