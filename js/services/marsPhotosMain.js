
app.factory('marsPhotosMain', ['$http', function($http) {
  return $http.get('http://www.omdbapi.com/?t=sherlock&tomatoes=true&plot=full')
            .success(function(data) {
				console.log(data);
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
/*
THIS WORKS, because this has the cross origin stuff
app.factory('marsPhotosMain', ['$http', function($http) {
  return $http.get('http://www.omdbapi.com/?t=sherlock&tomatoes=true&plot=full')
            .success(function(data) {
				console.log(data);
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
*/



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
