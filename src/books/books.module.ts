import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import {BookResolvers} from './books.resolvers';
import {BookSchema} from './books.schema';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthorModule} from '../authors/author.module';
@Module({
  imports: [
     MongooseModule.forFeature([{ name: 'Books', schema: BookSchema }]),
     AuthorModule
],
  controllers: [BooksController],
  providers: [BooksService, BookResolvers],
})
export class BooksModule {}
