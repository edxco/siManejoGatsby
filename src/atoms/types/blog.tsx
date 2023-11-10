export interface IBlog {
  contenido: { data: { contenido: string; id: string } };
  resumen: string;
  titulo: string;
  media: any;
  slug: string;
  blog_categoria: { categoria: string };
}

export interface IAllStrapiBlogNodes {
  nodes: Array<IBlog>;
}

export interface IAllStrapiBlog {
  allStrapiBlog: IAllStrapiBlogNodes;
}
