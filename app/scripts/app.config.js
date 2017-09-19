(function(){
  'use strict'

  angular.module('ripcode')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider

        .when('/', {
          controller: 'homeController',
          controllerAs: 'homeCtrl',
          templateUrl: './app/views/home.html'
        })

        .when('/mmc', {
          templateUrl: './app/views/mmc.html'
        })

        //.otherwise({redirectTo: '/'});
    }])

    .config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }])
}())
