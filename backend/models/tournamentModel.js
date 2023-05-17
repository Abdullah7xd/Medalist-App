import { Types } from 'mongoose';
const  { Schema ,model } = require('../connection');

const myschema= new Schema(
    {title:String,
    game:String,
    description:String,
    user:{type:Types.ObjectId,ref:"user"},
createdAT:Date,
updatedAT:Date,
image:String
});
module.exports=model('tournament',myschema);