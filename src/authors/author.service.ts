import { Injectable } from '@nestjs/common';
import {Author} from '../interface/author';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ObjectId} from 'mongodb';

@Injectable()
export class AuthorService {
    constructor(@InjectModel('Authors') private model: Model <Author>){}

async getAllAuthors() {
 return await this.model.find().exec();
}

async getById(id : string){
     return await this.model.findById({_id: new ObjectId(id)}).exec();
    }
}   
