import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';

const products: Array<Product>= [];



@Injectable()
export class ProductsService {
  createProduct(product: Product) {
    product.isAvailable = true;
    product.id = products.length;
    products.push (product);
    //return 'This action adds a new product';

    return products;
  }


  listAllProducts() {
    const prod = products.filter(p => p.isAvailable === true)

    return prod;
  }

  viewOneProduct(id: number) {
    const product = products.filter((p) => p.id === id);
    return  product;
  }

  updateProductInfo(workwith :any) {
    const productIndex = products.findIndex(p => p.id === workwith.id);
    const product = products[productIndex]
    products[productIndex] = {
         id:product.id,
         name:workwith.changes.name || product.name,
         model:workwith.changes.model || product.model,
         price:workwith.changes.price || product.price,
         color:workwith.changes.color || product.color,
         isAvailable:workwith.changes.isAvailable || product.isAvailable,

    }


    return  products ;
  }

  
}
