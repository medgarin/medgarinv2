(function(){
	'use strict';
	angular.module("medgarin", ['ngRoute'])
	.config(function($routeProvider) {
	    $routeProvider
	        .when('/', {
	            templateUrl : 'app/components/home/homeView.html',
	            controller  : 'HomeController'
	        })
	        .otherwise({
	            redirectTo: '/'
	        });
	});
})();