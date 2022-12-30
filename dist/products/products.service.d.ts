import { Product } from './interfaces/product.interface';
export declare class ProductsService {
    createProduct(product: Product): Product[];
    listAllProducts(): Product[];
    viewOneProduct(id: number): Product[];
    updateProductInfo(workwith: any): Product[];
}
