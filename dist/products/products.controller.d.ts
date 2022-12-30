import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: Product): Product[];
    listAllProducts(): Product[];
    viewOneProduct(id: string): Product[];
    updateProductInfo(workwith: any, id: string): Product[];
}
