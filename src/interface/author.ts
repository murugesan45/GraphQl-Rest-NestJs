import {Document} from 'mongoose';
export interface Author extends Document{
    _id : String;
    name: String;
    age: number;
}