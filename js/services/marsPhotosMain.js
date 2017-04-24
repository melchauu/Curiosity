app.factory('marsPhotosMain', ['$http', function($http) { 
	var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=DEMO_KEY";
	$http({
		method: 'JSONP',
		url: url
	}).
	success(function(status) {
		var img = data.photos[0].img_src;
		console.log(img);
		return img;
	}).
	error(function(status) {
		return err;
	})
}]);



/*app.factory('marsPhotosMain', ['$http', function($http) { 
  return $http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=DEMO_KEY') 
            .success(function(data) {
				var img = data.photos[0].img_src;
				console.log(img);
              return img;
            }) 
            .error(function(err) { 
              return err;
            }); 
}]);
*/