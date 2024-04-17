const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: {type: String, required: true },
  description: {type: String },
});

// creates the collection called "evelyn"
const bookModel = mongoose.model("evelyn", bookSchema);
module.exports = bookModel;