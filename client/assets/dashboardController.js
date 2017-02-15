app.controller('dashboardController', ['$scope', '$location', 'gamesFactory', 'userFactory', function($scope, $location, gamesFactory, userFactory) {
  userFactory.get(function(user) {
    if (!user) {
      var user = prompt('Please Enter Your Username!');
      if (user) {
        userFactory.set(user);
      }
    }
  })
  console.log('dashboardController started');
  gamesFactory.index(function(data) {
    $scope.games = data;
  })
  userFactory.phrase(function(response) {
    $scope.phrase = response;
  })
  $scope.logout = function() {
    userFactory.logout();
    $location.url('/');
  }
  $scope.search = function(item){
   if (!$scope.query || (item.name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) || (item.score.toString().indexOf($scope.query) != -1) ){
       return true;
   }
   return false;
};

}])
