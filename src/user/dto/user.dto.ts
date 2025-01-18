import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUser {
  @Field()
  email: string;

  @Field()
  password: string;
}
