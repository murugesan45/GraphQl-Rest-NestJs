import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../interface/books';


@Injectable()
export class BooksService {

    constructor(@InjectModel('Books') private model: Model <Books>){}
  
  async getAllBooks() {
      return await this.model.find().exec();
  }

}
