import { Controller, Param, Post, Get } from '@nestjs/common';
import { Body, Res } from '@nestjs/common/decorators';
import { BlogService } from './blog.service';
import { BlogDto } from './DTO/blog.dto';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('/')
  async getData(@Res() res) {
    try {
      const allBlogs = await this.blogService.getAllBlogs();
      return res.status(200).json({ success: true, data: allBlogs });
    } catch (error) {
      return res.status(500).json({ success: false, data: 'Error!' });
    }
  }

  @Get('/:id')
  async getBlogById(@Param() id, @Res() res) {
    try {
      const blog = await this.blogService.getBlogById(id);
      return res.status(200).json({ success: true, data: blog });
    } catch (error) {
      return res.status(500).json({ success: false, data: 'Error!' });
    }
  }

  @Post('/')
  async createNewBlog(@Body() blogDto: BlogDto, @Res() res) {
    try {
      await this.blogService.newBlog(blogDto);
      return res
        .status(200)
        .json({ success: true, data: 'Successfully created a blog.' });
    } catch (error) {
      return res.status(500).json({ success: false, data: 'Error!' });
    }
  }
}
