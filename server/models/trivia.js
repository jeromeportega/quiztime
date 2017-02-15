var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  question: {type: String, required: true, minlength: 15},
  rightAnswer: {type: String, required: true},
  wrongOne: {type: String, required: true},
  wrongTwo: {type: String, required: true}
});

var GameSchema = new mongoose.Schema({
  name: String,
  score: Number,
});

mongoose.model('Question', QuestionSchema);
mongoose.model('Game', GameSchema);
