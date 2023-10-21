import { IImageDefault } from "./cities";
export interface IBeneficio {
  titulo: string;
  icono: any;
}

export interface IPaymentMethod {
  payment: string;
  image: any;
}

export interface IHomePage {
  beneficios?: Array<IBeneficio>;
  paymentOption?: Array<IPaymentMethod>;
}

export interface ICtaBanner {
  media: any;
  subTitulo: string;
  titulo: string;
}

export interface IStrapiInicio {
  strapiInicio: IHomePage;
}

export interface IStrapiCtaBanner {
  strapiCtaBanner: ICtaBanner;
}
