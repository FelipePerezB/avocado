export type Url = string

export type TProductId = string

export interface TProductAttributes {
  description: string
  shape: string
  hardiness: string
  taste: string
}

export interface TProduct {
  id: TProductId;
  name: string;
  sku: string;
  price: number;
  image: Url;
  attributes: TProductAttributes;
}

type TAPIAVODetailResponse = TProduct

interface TAPIAvoResponse {
  lenght: number
  data: TProduct[]
  error?: string
}

export interface TItems{
  quantity: number,
  name: string, 
  image: string,
  id: number,
  price: number
}