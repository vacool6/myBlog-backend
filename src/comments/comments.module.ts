import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentsSchema, Comments } from './schemas/comments.schema';
import { BlogService } from '../blog/blog.service';
import { BlogController } from '../blog/blog.controller';
import { BlogSchema, Blogs } from '../blog/schemas/blog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsSchema },
      { name: Blogs.name, schema: BlogSchema },
    ]),
  ],

  controllers: [CommentsController, BlogController],
  providers: [CommentsService, BlogService],
})
export class CommentsModule {}
