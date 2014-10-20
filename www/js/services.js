planterApp.service('plantsService', function($http) {
	this.getPlants = function(callback) {
		$http.get('http://planter.romanliutikov.com/organicgarden/api/plants/available').success(callback);
	};
})

