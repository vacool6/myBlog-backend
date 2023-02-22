import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogDocument, Blogs } from './schemas/blog.schema';
import { BlogDto } from './DTO/blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blogs.name) private CodesModel: Model<BlogDocument>,
  ) {}

  async addCsvToDb(csvData: BlogDto): Promise<any> {
    const createdData = new this.CodesModel(csvData);
    return createdData.save();
  }
}
