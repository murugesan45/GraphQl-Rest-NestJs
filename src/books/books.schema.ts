import * as mongoose from 'mongoose'

export const BookSchema = new mongoose.Schema({
    name        : String,
    Id          : String,
    genre       : String,
    authorId    : String
});