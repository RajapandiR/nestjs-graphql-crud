import { Optional } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Field()
  id: string;

  @Field()
  name: string;

  @Optional()
  description: string;

  @Optional()
  price: number;
}
