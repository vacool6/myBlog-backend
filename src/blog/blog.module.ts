import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogSchema, Blogs } from './schemas/blog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blogs.name, schema: BlogSchema }]),
  ],

  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
