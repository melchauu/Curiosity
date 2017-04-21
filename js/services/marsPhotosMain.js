app.factory('marsPhotosMain', ['$http', function($http) { 
  return $http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=DEMO_KEY') 
            .success(function(data) {
				var img = data.photos;
				
              return data;
            }) 
            .error(function(err) { 
              return err;
            }); 
}]);
