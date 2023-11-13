import React from "react";
import { graphql, PageProps } from "gatsby";
import Carousel from "react-multi-carousel";
import {
  FlexContainerCenter,
  TitleAndSubtitle,
  CardWithImage,
  BaseCenterContainer,
  SlideImage,
} from "../../atoms";
import styled from "@emotion/styled";
import { useAPIURL, useTableOrMobile } from "../../hooks";
import { ISchoolBanner } from "../../atoms/types/cities";
import { webSizes } from "../../constants";

const CarouselContainer = styled.div(() => ({
  // maxWidth: webSizes.maxWidth,
  width: "100%",
  margin: "0 auto",
}));

const TitleContainer = styled(BaseCenterContainer)(() => ({
  margin: "90px 0",
}));

interface ISlideProps {
  schoolbanner: Array<ISchoolBanner>;
}

const ImageSlider = (props: ISlideProps) => {
  const API_URL = useAPIURL();
  const [mobileSize, tabletSize] = useTableOrMobile();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 2999, min: 1150 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1149, min: 765 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <CarouselContainer>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={6500}
          autoPlay={true}
        >
          {props.schoolbanner.map((blog, index) => {
            return (
              <SlideImage
                bottomTitle={blog.bottomTitle}
                strapi_id={blog.strapi_id}
                title={blog.title}
                topTitle={blog.topTitle}
                bgImage={
                  API_URL +
                  blog.bgImage.localFile.childImageSharp.gatsbyImageData.images
                    .fallback.src
                }
                key={blog.strapi_id}
              />
            );
          })}
        </Carousel>
      </CarouselContainer>
    </div>
  );
};

export default ImageSlider;
