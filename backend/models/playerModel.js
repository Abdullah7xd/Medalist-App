const { Schema, model, Types } = require('../connection');
const myschema = new Schema
    ({
        name: String,
        tournament: {type: Types.ObjectId, ref : 'tournament' },
        skill: String,
        image: String,
        createdAt: Date
    });
module.exports = model('player', myschema)