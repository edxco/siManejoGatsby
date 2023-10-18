import { ImageDataLike } from "gatsby-plugin-image";

export interface IImageDefault {
  localFile: ImageDataLike;
}

export interface IEscuelas {
  edges: Array<{ node: IEscuela }>;
}

export interface IAllStrapiEscuela {
  allStrapiEscuela: IEscuelas;
}

export interface INumerosContacto {
  id: string;
  telefono: string;
  whatsapp: string;
}

export interface IEscuela {
  id: string;
  slug: string;
  bgBoton: IImageDefault;
  horarios: {
    id: string;
    diaHora: string;
  };
  direccion: {
    id: string;
    ciudad: string;
    estado: string;
    linea1: string;
    linea2: string;
    strapi_id: number;
  };
  cursos: {
    descripcion: string;
    id: string;
  };
  descripcion: {
    data: {
      descripcion: string;
      id: string;
    };
  };
  numerosContacto: INumerosContacto;
  sucursal: string;
  titulo: string;
  terminosCondiciones: string;
}
