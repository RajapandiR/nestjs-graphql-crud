import { Optional } from '@nestjs/common';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  @Optional()
  price: number;
}
