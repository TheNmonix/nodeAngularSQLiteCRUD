'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [   
     
    'ngResource',
    'ngRoute' 
  ])
  .config(function ($routeProvider) {
     
	
	$routeProvider
      .when('/', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person'
      })       
      .otherwise({
        redirectTo: '/'
      });
  });
