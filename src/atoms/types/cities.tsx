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

export interface IContactNumbers {
  id: string;
  telefono: string;
  whatsapp: string;
}

export interface ISchoolBanner {
  bottomTitle: string;
  strapi_id: string;
  title: string;
  topTitle: string;
  bgImage: IImageDefault;
}

export interface IOpenHours {
  id: string;
  diaHora: string;
}

export interface IDrivingLessonsProps {
  nombre: string;
  totalHours: string
  alternativeHours: string;
  dias: string;
  costo: number;
  descripcion: string;
  id: string;
  mostPopular: boolean;
}

export interface IDrivingLessons {
  descripcion: string;
  titulo: string;
  detalleCurso: Array<IDrivingLessonsProps>;
}

export interface ILessonsBenefitsDetails {
  strapi_id: string;
  descripcion: string;
  titulo: string;
  imagen: IImageDefault;
}

export interface ILessonsBenefits {
  titulo: string;
  caracteristicaDetalle: Array<ILessonsBenefitsDetails>;
}

export interface IEscuela {
  id: string;
  slug: string;
  bgBoton: IImageDefault;
  horarios: Array<IOpenHours>;
  direccion: {
    id: string;
    ciudad: string;
    estado: string;
    linea1: string;
    linea2: string;
    strapi_id: number;
  };
  caracteristicas: ILessonsBenefits;
  cursos: IDrivingLessons;
  descripcion: {
    data: {
      descripcion: string;
      id: string;
    };
  };
  numerosContacto: IContactNumbers;
  sucursal: string;
  titulo: string;
  terminosCondiciones: string;
  schoolbanner: Array<ISchoolBanner>;
}
