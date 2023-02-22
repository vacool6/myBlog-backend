import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogDocument, Blogs } from './schemas/blog.schema';
import { BlogDto } from './DTO/blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blogs.name) private BlogsModel: Model<BlogDocument>,
  ) {}

  async getAllBlogs(): Promise<any> {
    return this.BlogsModel.find();
  }

  async getBlogById(identifier: { id: string }): Promise<any> {
    const { id } = identifier;
    return this.BlogsModel.findById(id);
  }

  async newBlog(data: BlogDto): Promise<any> {
    const createBlog = new this.BlogsModel(data);
    return createBlog.save();
  }
}
