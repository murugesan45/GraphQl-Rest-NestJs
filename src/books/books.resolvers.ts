
import { Query, Resolver, Parent, ResolveField, ID} from '@nestjs/graphql';
import {Books} from './books.model'
import { BooksService } from './books.service';
import { Author } from 'src/authors/author.model';
import {AuthorService} from '../authors/author.service';

@Resolver(of=>Books)
export class BookResolvers {
  constructor(private booksService: BooksService, private authorService :AuthorService){}

  @Query(()=> [Books])
   allBooks(){
       return  this.booksService.getAllBooks();
   }

  
  @ResolveField(()=>Author)
   author(@Parent() books: Books){
     const {authorId} = books;
     return this.authorService.getById(authorId);
   }

}
