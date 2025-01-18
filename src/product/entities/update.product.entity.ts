import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductEntity {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;
}
