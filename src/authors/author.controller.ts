import { Controller, Get, Param } from '@nestjs/common';
import { AuthorService } from './author.service';
import {Author} from '../interface/author'
@Controller()
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('/authors')
  getAuthor(): Promise<Author[]> {
   return this.authorService.getAllAuthors();
  }


  @Get('/author/:id')
  getAuthorById(@Param('id') id) :Promise<Author>{
    return this.authorService.getById(id);
  }

}
