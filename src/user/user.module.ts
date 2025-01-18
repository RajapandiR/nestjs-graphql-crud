import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './entities/user.entity';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
