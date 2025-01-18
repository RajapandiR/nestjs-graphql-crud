import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';
@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  @UseGuards(JwtAuthGuard)
  getProducts() {
    return this.productService.getProducts();
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
}
