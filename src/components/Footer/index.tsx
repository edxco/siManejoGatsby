import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import MainFooter from "./MainFooter";
import { INumerosContacto } from "../../atoms/types";

const queryFooter = graphql`
  query {
    strapiFooter {
      link {
        id
        section
        slug
      }
    }
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
          slug
          createdAt
          blog_categoria {
            categoria
          }
          media {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;

export interface IFooterBlog {
  createdAt: string;
  titulo: string;
  media: any;
  slug: string;
  blog_categoria: {
    categoria: string;
  };
}

export interface ILink {
  id: string;
  section: string;
  slug: string;
}

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
    edges: Array<{ node: IFooterBlog }>;
  };
  strapiFooter: {
    link: Array<ILink>;
  };
}

const Footer = () => {
  const data = useStaticQuery<IFooter>(queryFooter);
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <MainFooter
        blogs={data.allStrapiBlog.edges}
        schoolData={data.allStrapiEscuela.edges}
        footerLink={data.strapiFooter.link}
      />
    </div>
  );
};

export default Footer;
