var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/newquestion', {
      templateUrl: 'partials/newquestion.html',
      controller: 'newQuestionController'
    })
    .when('/lets_play', {
      templateUrl: 'partials/playgame.html',
      controller: 'newGameController'
    })
    .when('/logout', {
      templateUrl: 'partials/logout.html',
      controller: 'dashboardController'
    })
    .otherwise({
      redirectTo: '/'
    })
  })
