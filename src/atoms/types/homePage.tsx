import { IImageDefault } from "./cities";
export interface IBeneficio {
  titulo: string;
  icono: any;
}

export interface IBeneficios {
  beneficios: Array<IBeneficio>;
}

export interface ICtaBanner {
  media: any;
  subTitulo: string;
  titulo: string;
}

export interface IStrapiInicio {
  strapiInicio: IBeneficios;
}

export interface IStrapiCtaBanner {
  strapiCtaBanner: ICtaBanner;
}
