import { Controller, Get, Post, Body, Patch, Param, } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() product: Product) {
    return this.productsService.createProduct(product);
    //return "soft";
  }

  @Get()
  listAllProducts() {
    return this.productsService.listAllProducts();
  }

  @Get(':id')
  viewOneProduct(@Param('id') id: string) {
    return this.productsService.viewOneProduct(+id);
  }

  @Patch(':id')
  updateProductInfo( @Body() workwith : any , @Param("id") id:string) {
    return this.productsService.updateProductInfo(workwith);
  }

  
}
