import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import { Ciudades } from "../components";

//Query
export const CityPageQuery = graphql`
  query ($slug: String) {
    allStrapiEscuela(filter: {slug: {eq: $slug}}) {
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
          sucursal
          titulo
          terminosCondiciones
        }
      }
    }
  }
`;

const CityPage: React.FC<PageProps> = ({data}) => {
//   const data = useStaticQuery<any>(CityPageQuery);
  console.log(data)
  return <>Hola! {data.allStrapiEscuela.edges[0].node.sucursal}</>;
};

export default CityPage;
