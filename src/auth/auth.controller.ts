import { Controller, Param, Post } from '@nestjs/common';
import { Body, Get, Res } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body, @Res() res: Response) {
    try {
      const { username, email, password } = body;
      const hashedPassword = await bcrypt.hash(password, 12);
      await this.authService.create(username, email, hashedPassword);
      return res.status(200).json({ success: true, data: 'User registered' });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, data: 'Something went wrong' });
    }
  }

  @Post('login')
  async login(@Body() body, @Res({ passthrough: true }) res: Response) {
    try {
      const { email, password } = body;

      if (!email || !password) return { data: 'Enter email & password' };
      const user = await this.authService.getUser(email);
      if (!user) return { data: 'User not found' };
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return { data: 'Email or password is incorrect' };
      }

      //Gen token
      const jwt = await this.authService.generateToken(user);
      res.cookie('jwt', jwt, { httpOnly: true });
      return { data: 'Successfully logged in' };
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, data: 'Something went wrong' });
    }
  }

  @Get('user')
  async user(@Res() req: Request) {
    const cookie = req.signedCookies;
    console.log(cookie);
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { data: 'User logout out' };
  }
}
