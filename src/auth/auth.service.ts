import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: any) {
    const payload = { _id: user._id, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: `${this.configService.get('JWT_EXPIRATION')}m`,
      }),
    };
  }
}
