var mongoose  = require('mongoose'),
    Question  = mongoose.model('Question');

module.exports = {
  index: function(req, res) {
    console.log('Questions index');
    Question.find({}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  create: function(req, res) {
    console.log('Questions create');
    console.log('REQ.body', req.body);
    var question = new Question({question: req.body.question, rightAnswer: req.body.rightAnswer, wrongOne: req.body.wrongOne, wrongTwo: req.body.wrongTwo});
    console.log(question);
    question.save(function(err) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        // res.redirect('/questions');
        res.json({success: true});
      }
    })
  },
}
