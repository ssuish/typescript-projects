import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const productID = Math.random().toString(36);
    const newProduct = new Product(productID, title, desc, price);
    this.products.push(newProduct);
    return productID;
  }

  fetchProducts() {
    return [...this.products];
  }

  fetchSingleProduct(productID: string) {
    const product = this.findProduct(productID);

    return { ...product };
  }

  updateProduct(id: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(id);
    this.products[index] = {
      ...product,
      title: title || product.title,
      desc: desc || product.desc,
      price: price || product.price,
    };
  }

  findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return [product, productIndex];
  }

  removeProduct(id: string) {
    const index = this.findProduct(id)[1];

    this.products.splice(index, 1);
  }
}
