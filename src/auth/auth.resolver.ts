import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './dto/auth.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user = await this.authService.validateUser(email, password);
    return await this.authService.login(user);
  }
}
