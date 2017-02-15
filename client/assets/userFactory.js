app.factory('userFactory', function() {
  var user = '';
  var factory = {};
  var score;

  factory.get = function(callback) {
    callback(user);
    return user;
  }
  factory.set = function(currUser) {
    user = currUser;
  }
  factory.setScore = function(currScore) {
    score = currScore;
  }
  factory.phrase  = function(callback) {
    var phrase;
    if(score){
      if(score === 0) phrase = "Wow, that was awful.  Your score was 0/3.  Please, please try again.";
      else if (score == 1) phrase = "Still pretty bad.  Your score was 1/3.  Try again, if you must.";
      else if (score == 2) phrase = "Well, almost there.  Your score was 2/3.  Try for a perfect score?";
      else if (score == 3) phrase = "Finally, a perfect score.  3/3.  Great work.";
    }
    callback(phrase);
  }
  factory.logout = function() {
    user = '';
  }

  return factory;
})
