app.controller('newQuestionController', ['$scope', 'questionsFactory', '$location', 'userFactory', function($scope, questionsFactory, $location, userFactory) {
  console.log('newQuestionController started');
  $scope.user = '';
  userFactory.get(function(user) {
    if (!user) {
      $location.url('/');
    }
    console.log(user);
    $scope.user = user;
  })
  $scope.create = function() {
    questionsFactory.create($scope.newQuestion, function(data) {
      console.log(data);
      if (data.errors) {
        $scope.errors = data.errors;
      } else {
        alert("Question Added Successfully");
        $location.url('/');
      }
    })
  }
}])
