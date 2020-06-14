import {Module} from '@nestjs/common'
import {BooksModule} from './books/books.module';
import {AuthorModule} from './authors/author.module';

@Module({
    imports: [BooksModule,AuthorModule],
    providers: [],
  
  })
  export class ApiModule {}