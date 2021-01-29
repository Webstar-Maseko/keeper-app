const {model, Schema} = require("mongoose");
const note = require("./note");

module.exports = model("Deleted", note.schema);