import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { PaginationArgs } from './dto/pagination.dto';
@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  @UseGuards(JwtAuthGuard)
  getProducts(@Args() args: PaginationArgs) {
    return this.productService.getProducts(args);
  }

  @Query(() => Product, { nullable: true })
  @UseGuards(JwtAuthGuard)
  getProduct(@Args('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Mutation(() => Product)
  @UseGuards(JwtAuthGuard)
  createProduct(@Args('body') body: CreateProductDto) {
    return this.productService.createProduct(body);
  }

  @Mutation(() => Product)
  @UseGuards(JwtAuthGuard)
  updateProduct(@Args('body') body: UpdateProductDto) {
    return this.productService.updateProduct(body);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  deleteProduct(@Args('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @Query(() => Number, { name: 'count' })
  async getCount(): Promise<number> {
    return this.productService.getCount();
  }
}
