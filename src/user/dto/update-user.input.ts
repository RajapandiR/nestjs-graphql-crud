import { CreateUser } from './user.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUser) {
  @Field(() => Int)
  id: number;
}
