import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import MainFooter from "./MainFooter";
import { INumerosContacto } from "../../atoms/types";

const queryFooter = graphql`
  query {
    allStrapiEscuela {
      edges {
        node {
          id
          slug
          sucursal
          numerosContacto {
            id
            telefono
            whatsapp
          }
        }
      }
    }
    allStrapiBlog(sort: { createdAt: DESC }, limit: 3) {
      edges {
        node {
          titulo
          createdAt
        }
      }
    }
  }
`;

interface IFooter {
  allStrapiEscuela: {
    edges: Array<{
      node: {
        id: string;
        sucursal: string;
        slug: string;
        numerosContacto: INumerosContacto;
      };
    }>;
  };
  allStrapiBlog: {
    edges: Array<{ node: { createdAt: string; titulo: string } }>;
  };
}

const Footer = () => {
  const data = useStaticQuery<IFooter>(queryFooter);
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <MainFooter blogs={data.allStrapiBlog.edges} schoolData={data.allStrapiEscuela.edges} />
    </div>
  );
};

export default Footer;