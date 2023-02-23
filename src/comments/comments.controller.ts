import { Controller, Post, Get } from '@nestjs/common';
import { Body, Param, Res } from '@nestjs/common/decorators';
import { CommentsDto } from './DTO/comments.dto';
import { CommentsService } from './comments.service';
import { BlogService } from 'src/blog/blog.service';

@Controller('comment')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly blogService: BlogService,
  ) {}

  @Post('/:id')
  async newComment(@Body() commentsDto: CommentsDto, @Param() id, @Res() res) {
    try {
      const blog = await this.blogService.getBlogById(id);
      const comment = await this.commentsService.postComment(commentsDto);
      blog.comments.push(comment);
      await comment.save();
      await blog.save();
      return res
        .status(200)
        .json({ success: true, data: 'Successfully ]commented.' });
    } catch (error) {
      return res.status(500).json({ success: false, data: 'Error!' });
    }
  }
}
