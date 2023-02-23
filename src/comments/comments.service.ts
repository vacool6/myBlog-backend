import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommentsDocument, Comments } from './schemas/comments.schema';
import { CommentsDto } from './DTO/comments.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private CommentsModel: Model<CommentsDocument>,
  ) {}

  async postComment(data: CommentsDto) {
    const newComment = new this.CommentsModel(data);
    return newComment;
  }
}
