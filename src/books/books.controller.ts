import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from '../interface/books';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/books')
  getBooks():Promise<Books[]> {
    return this.booksService.getAllBooks();
  }
  
}
