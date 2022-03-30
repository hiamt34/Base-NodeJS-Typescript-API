import { ProductDocument } from "src/interfaces/products.interface";
import { Product } from "../models";
import { BaseService } from "./service";

export class ProductService<T> extends BaseService<T> {

}

export const productService = new ProductService<ProductDocument>(Product)
