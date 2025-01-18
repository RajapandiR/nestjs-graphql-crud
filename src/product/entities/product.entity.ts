import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema({ timestamps: true, versionKey: false })
export class Product extends Document {
  @Field()
  id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  @Prop({})
  price: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
