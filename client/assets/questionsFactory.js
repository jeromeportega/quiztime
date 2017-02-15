app.factory('questionsFactory', function($http) {
  console.log('questionsFactory started')
  var factory = {};

  factory.index = function(callback) {
    $http.get('/questions').then(function(res) {
      console.log(res);
      if (callback && typeof callback == "function") {
        callback(res.data);
      }
    })
  }
  factory.create = function(newQuestion, callback) {
    $http.post('/questions', newQuestion).then(function(res) {
      console.log(res);
      if (callback && typeof callback == "function") {
        callback(res.data);
      }
    })
  }
  return factory;
})
