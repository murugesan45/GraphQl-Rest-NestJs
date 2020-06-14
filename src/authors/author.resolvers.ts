
import { Query, Resolver } from '@nestjs/graphql';
import {Author} from './author.model';
import { AuthorService } from './author.service';

@Resolver()
export class AuthorResolvers {
  constructor(private authorService: AuthorService){}

  @Query(()=> [Author])
  allAuthors(){
    return this.authorService.getAllAuthors();
   }

}
