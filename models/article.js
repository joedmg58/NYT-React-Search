var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  Id: {type: String, required: true},
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;