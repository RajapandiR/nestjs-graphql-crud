import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { PaginationArgs } from './dto/pagination.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createProduct(body: CreateProductDto): Promise<Product> {
    return this.productModel.create(body);
  }

  async getProducts(
    args: PaginationArgs = { page: 0, limit: 10 },
  ): Promise<Product[]> {
    let perPage = args.page;
    if (Number(perPage) === 0) {
      perPage = 0;
    } else {
      perPage = Number(perPage) - 1;
    }
    return this.productModel.find(
      {},
      {},
      {
        sort: { _id: -1 },
        limit: args.limit,
        skip: perPage * args.limit,
      },
    );
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    if (product) return product;
    else throw new NotFoundException('Product not found');
  }

  async updateProduct(body: UpdateProductDto): Promise<Product> {
    await this.getProductById(body.id);
    return this.productModel.findByIdAndUpdate(body.id, body, { new: true });
  }

  async deleteProduct(id: string): Promise<boolean> {
    await this.getProductById(id);
    const result = await this.productModel.findByIdAndDelete(id);
    return result ? true : false;
  }

  async getCount(): Promise<number> {
    return await this.productModel.countDocuments();
  }
}
