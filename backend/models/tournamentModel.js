import { Types } from 'mongoose';
const { Schema, model } = require('../connection');

const myschema = new Schema(
    {
        title: String,
        game: String,
        description: String,
        user: { type: Types.ObjectId, ref: "user" },
        createdAt: Date,
        updatedAt: Date,
        image: String
    });
module.exports = model('tournament', myschema);