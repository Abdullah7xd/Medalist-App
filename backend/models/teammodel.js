const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  name: { type: String, required: true },
  image : String,
  teamData: Object,
  players: [{ type: Types.ObjectId, ref: "player", default: [] }],
  created_at: Date,
  updated_at: Date,
});

module.exports = model("team", schema);