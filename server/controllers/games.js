var mongoose  = require('mongoose'),
    Game      = mongoose.model('Game');

module.exports = {
  index: function(req, res) {
    console.log('Games index');
    Game.find({}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  create: function(req, res) {
    console.log('Games create');
    console.log('REQ.body', req.body);
    var game = new Game({name: req.body.name, score: req.body.score});
    console.log(game);
    game.save(function(err) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        // res.redirect('/games');
        res.json({success: true});
      }
    })
  }
}
