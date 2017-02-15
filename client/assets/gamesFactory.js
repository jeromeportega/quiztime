app.factory('gamesFactory', function($http) {
  console.log('gamesFactory started')
  var factory = {};

  factory.index = function(callback) {
    $http.get('/games').then(function(res) {
      console.log(res);
      if (callback && typeof callback == "function") {
        callback(res.data);
      }
    })
  }
  factory.create = function(newGame, callback) {
    $http.post('/games', newGame).then(function(res) {
      console.log(res);
      if (callback && typeof callback == "function") {
        callback(res.data);
      }
    })
  }
  return factory;
})
