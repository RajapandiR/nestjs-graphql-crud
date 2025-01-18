import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const exUser = await this.findByEmail(email);
    if (exUser) throw new ForbiddenException('Already exists');
    const newUser = new this.userModel({ email, password: hashedPassword });
    return newUser.save();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
