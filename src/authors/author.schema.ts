import * as mongoose from 'mongoose'
import {ObjectId} from 'mongodb'
export const AuthorSchema = new mongoose.Schema({

    _id        :  ObjectId,

    name        : String,
   
    age         : Number
});