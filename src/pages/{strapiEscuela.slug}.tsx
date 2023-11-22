import React, { useState } from "react";
import { graphql } from "gatsby";
import {
  CallUsBanner,
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CityPage = ({ data }: { data: ISchoolSingle }) => {
  const currentData = data.allStrapiEscuela.edges[0].node;
  const [open, setOpen] = useState(false);
  const [lessonsData, setLessonsData] = useState({
    lessonName: "",
    lessonPrice: 0,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        lessonsDataSubmited={(value) => {
          console.log("===value", value);
          setLessonsData(value);
          setOpen(true);
        }}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {lessonsData.lessonName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`$${lessonsData.lessonPrice}`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CityPage;
