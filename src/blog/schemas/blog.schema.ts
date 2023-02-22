import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blogs>;

@Schema({ timestamps: true })
export class Blogs {
  @Prop()
  coverImage: string;

  @Prop()
  domain: string;

  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop()
  authorImage: string;

  @Prop()
  authorName: string;

  @Prop()
  createdDate: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blogs);
