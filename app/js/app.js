'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutCtrl'});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactCtrl'});
    $routeProvider.when('/more', {templateUrl: 'partials/more.html', controller: 'moreCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
    
  }]);
