import React from "react";
import { useTheme } from "@mui/material";
import { useAPIURL, useTableOrMobile } from "../../hooks";
import styled from "@emotion/styled";
import {
  CardWithImage,
  FlexContainerCenter,
  TitleAndSubtitle,
} from "../../atoms";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IAllStrapiBlogNodes } from "../../atoms/types/blog";
import { webSizes } from "../../constants";

const CarouselContainer = styled.div(() => ({
  maxWidth: webSizes.maxWidth,
  width: "100%",
  margin: "10px auto 0 auto",
}));

const BlogHomePage = (props: IAllStrapiBlogNodes) => {
  const theme = useTheme();
  const API_URL = useAPIURL();
  const [mobileSize, tabletSize] = useTableOrMobile();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2999, min: 1150 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1149, min: 765 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  };

  return (
    <FlexContainerCenter
    //   bgColor={theme.grayScale.dark}
      padding="70px 0 150px 0"
    >
      <TitleAndSubtitle title={"Blog Si Manejo"} subtitle="Te compartimos nuestros consejos, tips y notas para la mejor conducción" margin="0 0 30px 0"/>
      <CarouselContainer>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          autoPlay={mobileSize ? true : false}
        >
          {props.nodes.map((blog) => {
            return (
              <CardWithImage
                image={
                  API_URL +
                  blog.media.localFile.childImageSharp.gatsbyImageData.images
                    .fallback.src
                }
                title={blog.titulo}
                description={blog.resumen}
                category={blog.blog_categoria.categoria}
                key={blog.titulo}
                slug={blog.slug}
              />
            );
          })}
        </Carousel>
      </CarouselContainer>
    </FlexContainerCenter>
  );
};

export default BlogHomePage;
