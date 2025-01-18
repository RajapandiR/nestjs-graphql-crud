import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: '1234567890', // Replace with env variable
      ignoreExpiration: false,
      // secretOrKey: configService.getOrThrow<string>('AT_SECRET'),
      passReqToCallback: false,
    });
  }

  async validate(payload: any): Promise<Partial<User>> {
    return { _id: payload._id, email: payload.email };
  }
}
