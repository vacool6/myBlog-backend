import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from './schemas/user.schema';
import { UserDto } from './DTO/user.dto';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async create(
    username: string,
    email: string,
    password: string,
  ): Promise<any> {
    const newUser = new this.UserModel({ username, email, password });
    return newUser.save();
  }

  async getUser(email: string): Promise<any> {
    const user = await this.UserModel.findOne({ email });
    return user;
  }

  async generateToken(user: any): Promise<any> {
    const jwt = await this.jwtService.signAsync({ user });
    return jwt;
  }

  async forgotPassword(user: UserDto): Promise<any> {
    console.log(user);
  }

  async confirmEmail(user: UserDto): Promise<any> {
    console.log(user);
  }
}
