import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import {AuthorResolvers} from './author.resolvers';
import { AuthorSchema} from './author.schema';
import {MongooseModule} from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Authors', schema: AuthorSchema}])],
  controllers: [AuthorController],
  providers: [AuthorService, AuthorResolvers],
  exports:[AuthorService]
})
export class AuthorModule {}
