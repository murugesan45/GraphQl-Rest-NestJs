import {Document} from 'mongoose';
export interface Books extends Document{
    _id : String;
    name: String;
    authorId: String;
    genre:String;
}