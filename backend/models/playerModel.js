const { Schema ,model} = require('../connection');
const myschema=new Schema
({
    name:String,
    skill:String,
    avatar:String,
    bio:String,
    createdAT:Date
});
module.exports= model('player',myschema)