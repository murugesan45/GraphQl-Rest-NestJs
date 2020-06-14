
import {ObjectType, Field, Int} from '@nestjs/graphql';

@ObjectType()
export class Author{

    @Field()
    _id : String;

    @Field()
    name : String;

    @Field(type => Int)
    age : number;

}