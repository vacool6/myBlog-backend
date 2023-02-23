import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentsDocument = HydratedDocument<Comments>;

@Schema({ timestamps: true })
export class Comments {
  @Prop({
    type: String,
    required: true,
    validate: {
      validator: () => Promise.resolve(),
    },
  })
  username: string;

  @Prop({
    type: String,
    required: true,
    validate: {
      validator: () => Promise.resolve(),
    },
  })
  comment!: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
