import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUser } from './dto/user.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  @UseGuards(JwtAuthGuard)
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUser') createUserInput: CreateUser,
  ): Promise<User> {
    const { email, password } = createUserInput;
    return this.userService.createUser(email, password);
  }
}
