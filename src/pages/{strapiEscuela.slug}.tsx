import React, { useState } from "react";
import { graphql } from "gatsby";
import {
  CallUsBanner,
  FormPrePayment,
  GoogleMapsCustom,
  ImageSlider,
  InfoSchoolSection,
  LessonsBenefits,
  PriceTable,
} from "../components";
import { IEscuelas } from "../atoms/types";
import { IAllStrapiBlogNodes } from "../atoms/types/blog";
import { Box, Modal, Typography } from "@mui/material";

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
            titulo
            detalleCurso {
              nombre
              totalHours
              hoursPerDay
              optionalHours
              dias
              costo
              descripcion
              id
              mostPopular
            }
          }
          caracteristicas {
            titulo
            caracteristicaDetalle {
              strapi_id
              descripcion
              titulo
              imagen {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
            }
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
            whatsapp
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
          coordenadas {
            lat
            lng
          }
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
  const currentData = data.allStrapiEscuela.edges[0].node;

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <ImageSlider schoolbanner={currentData.schoolbanner} />
      <InfoSchoolSection
        title={currentData.titulo}
        description={currentData.descripcion.data.descripcion}
        city={currentData.sucursal}
      />
      <CallUsBanner
        contactNumbers={currentData.numerosContacto}
        openHours={currentData.horarios}
        city={currentData.sucursal}
      />
      <PriceTable
        lessons={currentData.cursos.detalleCurso}
        title={currentData.cursos.titulo}
        description={currentData.cursos.descripcion}
        conditions={currentData.terminosCondiciones}
        whatsApp={currentData.numerosContacto.whatsapp}
      />
      <LessonsBenefits
        titulo={currentData.caracteristicas.titulo}
        caracteristicaDetalle={
          currentData.caracteristicas.caracteristicaDetalle
        }
      />
      <GoogleMapsCustom
        lat={currentData.coordenadas.lat}
        lng={currentData.coordenadas.lng}
      />
    </div>
  );
};

export default CityPage;
