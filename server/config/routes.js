var games = require('./../controllers/games.js');
var questions = require('./../controllers/questions.js');

module.exports = function(app) {
  app.get('/questions', function(req, res) {
    questions.index(req, res);
  });
  app.post('/questions', function(req, res) {
    questions.create(req, res);
  });
  app.get('/games', function(req, res) {
    games.index(req, res);
  });
  app.post('/games', function(req, res) {
    games.create(req, res);
  });
}
