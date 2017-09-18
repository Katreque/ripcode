(function(){
  'use strict'

  angular.module('ripcode')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider

        .when('/', {
          templateUrl: './app/views/home.html'
        })
    }])
}())
