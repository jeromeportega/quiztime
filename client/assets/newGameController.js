app.controller('newGameController', ['$scope', 'gamesFactory', '$location', 'userFactory', 'questionsFactory', function($scope, gamesFactory, $location, userFactory, questionsFactory) {
  console.log('newGameController started');
  $scope.askquestions = [];
  $scope.user = '';
  $scope.newGame = {};
  var count = 0;

  userFactory.get(function(user) {
    if (!user) {
      $location.url('/');
    }
    console.log(user);
    $scope.user = user;
  })

  questionsFactory.index(function(data) {
    $scope.questions = data;
    var checker = 0;
    var min = 0;
    var max = $scope.questions.length - 1;
    while ($scope.askquestions.length < 3){
      var randomQuestion = Math.floor(Math.random() * (max - min + 1)) + min;
      for (var i = 0; i < $scope.askquestions.length; i++){
        if ($scope.askquestions[i] == $scope.questions[randomQuestion]) checker = 1;
      }
      if (checker < 1) {
        $scope.askquestions.push($scope.questions[randomQuestion]);
      }
      checker = 0;
    }
    console.log($scope.askquestions);
  });

  $scope.create = function() {
    gamesFactory.create($scope.newGame, function(data) {
      console.log(data);
      if (data.errors) {
        $scope.errors = data.errors;
      } else {
        $location.url('/');
      }
    })
    $scope.newGame = {};
    userFactory.setScore(count);
    count = 0;
  }

  $scope.checkAnswers = function() {
    var answers = [];
    answers.push($scope.group1);
    answers.push($scope.group2);
    answers.push($scope.group3);
    for (var i = 0; i < $scope.askquestions.length; i++){
      if ($scope.askquestions[i].rightAnswer == answers[i]) count++;
    }
    $scope.newGame.score = count;
    $scope.newGame.name = $scope.user;
    $scope.create();
  }
}]);
