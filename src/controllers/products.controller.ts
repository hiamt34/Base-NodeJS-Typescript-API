
import { ProductDocument } from "../interfaces/products.interface";
import { productService } from "../services";
import { BaseController } from "./controller";

class ProductsController<T> extends BaseController<T> {
    
}

export const productsControler = new ProductsController<ProductDocument>(productService)