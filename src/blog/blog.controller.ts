import { Controller, Param, Post, Get, UploadedFile } from '@nestjs/common';
import { Res, UseInterceptors } from '@nestjs/common/decorators';
import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('/')
  async getData() {
    console.log('Sup');
  }
}
