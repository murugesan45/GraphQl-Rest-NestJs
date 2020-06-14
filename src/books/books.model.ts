
import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class Books{

    @Field({nullable:true})
    _id : String;

    @Field()
    name : String;

    @Field()
    genre : string;

    @Field()
    authorId : string;

}