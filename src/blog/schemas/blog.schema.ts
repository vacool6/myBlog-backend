import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blogs>;

@Schema({ timestamps: true })
export class Blogs {
  @Prop({
    type: Number,
    required: true,
    validate: {
      validator: () => Promise.resolve(),
    },
  })
  coverImagePosition: number;

  @Prop({
    type: String,
    required: true,
    validate: {
      validator: () => Promise.resolve(),
    },
  })
  domain: string;

  @Prop({
    type: String,
    required: true,
    validate: {
      validator: () => Promise.resolve(),
    },
  })
  title: string;

  @Prop({
    type: String,
    required: true,
    validate: {
      validator: () => Promise.resolve(),
    },
  })
  body: string;

  @Prop({
    type: Number,
    required: true,
    validate: {
      validator: () => Promise.resolve(),
    },
  })
  authorImagePosition: number;

  @Prop({
    type: String,
    required: true,
    validate: {
      validator: () => Promise.resolve(),
    },
  })
  authorName: string;

  @Prop({
    type: String,
    required: true,
    validate: {
      validator: () => Promise.resolve(),
    },
  })
  createdDate: string;

  @Prop({ ref: 'Comments', default: [] })
  comments: [];
}

export const BlogSchema = SchemaFactory.createForClass(Blogs);
