import React from "react";
import { graphql, PageProps } from "gatsby";
import Carousel from "react-multi-carousel";
import {
  FlexContainerCenter,
  TitleAndSubtitle,
  CardWithImage,
  BaseCenterContainer,
} from "../atoms";
import styled from "@emotion/styled";
import { webSizes } from "../constants";
import { useAPIURL, useTableOrMobile } from "../hooks";
import { ImageSlider } from "../components";
import { IEscuelas } from "../atoms/types";
import { IAllStrapiBlogNodes } from "../atoms/types/blog";

//Query
export const CityPageQuery = graphql`
  query ($slug: String) {
    allStrapiEscuela(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          slug
          horarios {
            id
            diaHora
          }
          direccion {
            id
            ciudad
            estado
            linea1
            linea2
            strapi_id
          }
          cursos {
            descripcion
            id
          }
          descripcion {
            data {
              descripcion
              id
            }
          }
          numerosContacto {
            id
            telefono
          }
          schoolbanner {
            bottomTitle
            strapi_id
            title
            topTitle
            bgImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
          sucursal
          titulo
          terminosCondiciones
        }
      }
    }
  }
`;

interface ISchoolSingle {
  allStrapiEscuela: IEscuelas;
  allStrapiBlog: IAllStrapiBlogNodes;
}

const CityPage = ({ data }: { data: ISchoolSingle }) => {
  //   const data = useStaticQuery<any>(CityPageQuery);
  console.log("====", data);

  const currentData = data.allStrapiEscuela.edges[0].node;

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <ImageSlider
        title={currentData.sucursal}
        schoolbanner={currentData.schoolbanner}
      />
    </div>
  );
};

export default CityPage;
