var example = angular.module('example',['ui.router']);
example.config(function($stateProvider, $urlRouterProvider){

	$stateProvider.state('login', {
		url:'/login',
		templateUrl: 'templates/login.html',
		controller:'LoginController'
	}).state('secure', {
		url:'/secure',
		templateUrl:'templates/secure.html',
		controller:'SecureController'
	});
	$urlRouterProvider.otherwise('/login');
});

example.controller('LoginController', function($scope){
	$scope.login = function(){
		window.location.href= 'http://localhost:8080/uaa/oauth/authorize?redirect_uri=http://localhost:9090/oauth_callback.html&client_id=cf&client_secret=&response_type=token'
	};
});

example.controller('SecureController', function($scope){
    $scope.accessToken = JSON.parse(window.localStorage.getItem("mamenta")).oauth.access_token;
    console.log($scope.accessToken);
});