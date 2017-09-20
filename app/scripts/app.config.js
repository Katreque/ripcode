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
          controller: 'homeController',
          controllerAs: 'homeCtrl',
          templateUrl: './app/views/mmc.html'
        })

        .when('/mdc', {
          controller: 'homeController',
          controllerAs: 'homeCtrl',
          templateUrl: './app/views/mdc.html'
        })

        .when('/segtree', {
          controller: 'homeController',
          controllerAs: 'homeCtrl',
          templateUrl: './app/views/segtree.html'
        })

        .when('/dfs', {
          controller: 'homeController',
          controllerAs: 'homeCtrl',
          templateUrl: './app/views/dfs.html'
        })

        .when('/template', {
          controller: 'homeController',
          controllerAs: 'homeCtrl',
          templateUrl: './app/views/template.html'
        })

        .when('/kappa', {
          controller: 'homeController',
          controllerAs: 'homeCtrl',
          templateUrl: './app/views/kappa.html'
        })
        .otherwise({redirectTo: '/'});
    }])

    .config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }])
}())
