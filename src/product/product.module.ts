import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
