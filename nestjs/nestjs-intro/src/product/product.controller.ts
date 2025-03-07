import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): any {
    const generatedID = this.productsService.insertProduct(
      productTitle,
      productDescription,
      productPrice,
    );

    return { id: generatedID };
  }

  @Get()
  getProducts() {
    return this.productsService.fetchProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.fetchSingleProduct(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ) {
    this.productsService.updateProduct(
      id,
      productTitle,
      productDescription,
      productPrice,
    );
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    this.productsService.removeProduct(id);
  }
}
