import { CategoryModel } from "./categorymodel";

export interface ProductModel
{
  id: number;
  title: string;
  price: number;
  description: string;
  images:string[]
  category:CategoryModel;
}
//omit -- omitir (id, categiry)
export interface CreateProductDto extends Omit<ProductModel, 'id' | 'category'>{
  categoryId:number;
}
//actualizar de forma parcial --- '?--opcional'
export interface UpdateProductDto extends Partial<ProductModel>{
  categoryId?:number;
}
