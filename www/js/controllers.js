var planterApp = angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	// Form data for the login modal
	$scope.loginData = {};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$scope.closeLogin();
		}, 1000);
	};
})

.controller('PlantsCtrl', function($scope, plantsService) {
	$scope.plants = plantsService.getPlants( function( data ){
		$scope.plants = data;
		console.log(data);
	});

	$scope.plants = [
		{ title: 'Aucado', image: "img/aucado.jpg", notifications: true, id: 1 },
		{ title: 'Cactus', image: "img/cactus.jpg", id: 2 },
		{ title: 'Codieaum', image: "img/codiaeum.jpg", id: 3 },
		{ title: 'Violets', image: "img/violets.jpg", id: 4 },
		{ title: 'Violets', image: "img/violets.jpg", notifications: true, id: 4 },
		{ title: 'Violets', image: "img/violets.jpg", id: 4 },
		{ title: 'Violets', image: "img/violets.jpg", id: 4 }
	];

	$scope.doRefresh = function() {
	     setTimeout( function() {
	       // Stop the ion-refresher from spinning
	       $scope.$broadcast('scroll.refreshComplete');
	     }, 4000 );
    };
})

.controller('PlantCtrl', function($scope, $stateParams) {
})

.controller('BrowseCtrl', function($scope, $stateParams, Camera) {
	$scope.photoURL = "img/logo.png";

	$scope.getPhoto = function() {
	    Camera.getPicture().then(function(imageURI) {
	      $scope.photoURL = imageURI;
	    }, function(err) {
	      console.err(err);
    });
  };
});




