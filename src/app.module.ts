import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './authors/author.module';
import { BooksModule } from './books/books.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApiModule } from './api.module';
import {MongooseModule} from '@nestjs/mongoose'
@Module({
  imports: [
    AuthorModule,
    BooksModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      }),
      ApiModule,
      MongooseModule.forRoot('mongodb+srv://murugesan:test@cluster0-fp0ss.mongodb.net/test?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
