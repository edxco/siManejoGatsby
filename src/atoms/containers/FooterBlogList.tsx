import React from "react";
import styled from "@emotion/styled";
import { Typography, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useAPIURL, useTableOrMobile } from "../../hooks";
import { IFooterBlog } from "../../components/Footer";
import { truncateText } from "../../helpers";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CustomAccordion, CustomLink } from "..";

const MainContainer = styled.div(({ mobileSize }: { mobileSize: boolean }) => ({
  maxWidth: "300px",
  minWidth: "300px",
  width: "100%",
  margin: 0,
  padding: 0,
}));

const BlogContainer = styled(Link)(() => ({
  margin: "15px 0 0 12px",
  display: "flex",
  justifyContent: "flex-start",
  gap: 15,
  backgroundColor: "rgba(22, 57, 100, 0.7)",
  borderRadius: "14px",
  "&:hover": {
    backgroundColor: "rgba(37, 79, 139, 0.4)",
  },
}));

const ImgCard = styled.div(({ imgUrl }: { imgUrl: string }) => ({
  height: "80px",
  width: "80px",
  backgroundImage: `url(${imgUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "10px 1px 1px 10px",
}));

const TextContainer = styled.div(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-between",
}));

const KeepReading = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: '10px',
}));

const LinkContainer = styled.div(({ mobileSize }: { mobileSize: boolean }) => ({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  marginLeft: mobileSize ? 0 : "10px",
}));

interface IFooterBlogList {
  latestBlogs: Array<{ node: IFooterBlog }>;
  title: string;
}

const FooterBlogList = (props: IFooterBlogList) => {
  const theme = useTheme();
  const [mobileSize, tabletSize] = useTableOrMobile();
  const API_URL = useAPIURL();

  return (
    <MainContainer mobileSize={mobileSize}>
      {mobileSize || tabletSize ? (
        <CustomAccordion title={props.title}>
          <LinkContainer mobileSize={mobileSize || tabletSize}>
            {props.latestBlogs.map((blog, index) => (
              <CustomLink
                variant="body1"
                fontWeight={400}
                align="left"
                underline="none"
                color={theme.grayScale.light}
                href={blog.node.slug}
                sx={{ mb: 2 }}
                hoverColor={theme.siManejoSecondary.main}
                key={blog.node.titulo + index}
              >
                {blog.node.titulo}
              </CustomLink>
            ))}
          </LinkContainer>
        </CustomAccordion>
      ) : (
        <>
          <Typography
            variant="h6"
            fontWeight={900}
            align="left"
            color={"white"}
            margin={"20px 10px 10px 10px"}
          >
            {props.title}
          </Typography>
          {props.latestBlogs.map((blog) => (
            <BlogContainer underline="none" href="#">
              <ImgCard
                imgUrl={
                  API_URL +
                  blog.node.media.localFile.childImageSharp.gatsbyImageData
                    .images.fallback.src
                }
              />
              <TextContainer>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  align="left"
                  color={'white'}
                  sx={{ mb: 0.5 }}
                >
                  {truncateText(blog.node.titulo, 35)}
                </Typography>
                <KeepReading>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    align="left"
                    color={theme.grayScale.light}
                    sx={{ mb: 0.5 }}
                  >
                    Seguir leyendo
                  </Typography>
                  <KeyboardArrowRightIcon
                    sx={{ color: theme.grayScale.light }}
                  />
                </KeepReading>
              </TextContainer>
            </BlogContainer>
          ))}
        </>
      )}
    </MainContainer>
  );
};

export default FooterBlogList;