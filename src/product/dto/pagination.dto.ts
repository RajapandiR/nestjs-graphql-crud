import { Field, Int, ArgsType } from '@nestjs/graphql';
// import { Max, Min } from 'class-validator';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int)
  page = 0;

  @Field(() => Int)
  limit = 25;
}
