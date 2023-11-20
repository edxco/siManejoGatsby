import React from "react";
import { graphql, PageProps } from "gatsby";
import {
  BlogHomePage,
  Ciudades,
  Features,
  GoogleReviews,
  PaymentMethods,
  SubscribeBanner,
} from "../components";
import { IEscuelas, IHomePage, ICtaBanner } from "../atoms/types";
import { IAllStrapiBlogNodes } from "../atoms/types/blog";

export const querySchool = graphql`
  query {
    allStrapiEscuela {
      edges {
        node {
          id
          slug
          bgBoton {
            url
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
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
            whatsapp
          }
          sucursal
          titulo
          terminosCondiciones
        }
      }
    }
    strapiInicio {
      paymentOption {
        payment
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      beneficios {
        titulo
        icono {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allStrapiBlog {
      nodes {
        contenido {
          data {
            contenido
            id
          }
        }
        resumen
        blog_categoria {
          categoria
        }
        titulo
        slug
        media {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
    strapiCtaBanner {
      media {
        id
        url
        localFile {
          publicURL
        }
      }
      subTitulo
      titulo
    }
  }
`;

interface IHomePageMain {
  allStrapiEscuela: IEscuelas;
  strapiInicio: IHomePage;
  allStrapiBlog: IAllStrapiBlogNodes;
  strapiCtaBanner: ICtaBanner;
}

const Home = ({ data }: { data: IHomePageMain }) => {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <Ciudades edges={data.allStrapiEscuela.edges} />
      <PaymentMethods paymentOption={data.strapiInicio.paymentOption} />
      <SubscribeBanner
        media={data.strapiCtaBanner.media}
        subTitulo={data.strapiCtaBanner.subTitulo}
        titulo={data.strapiCtaBanner.titulo}
      />
      <BlogHomePage nodes={data.allStrapiBlog.nodes} />
      {/* <GoogleReviews /> */}
      <Features beneficios={data.strapiInicio.beneficios} />
    </div>
  );
};

export default Home;
