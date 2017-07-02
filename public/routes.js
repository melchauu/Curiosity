var https = require('https');

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos/:sol_num', function (req, res) {

		/*var options = {
		  host: 'www.google.com',
		  path: '/index.html'
		};*/
		var returnData;
    var solNum = req.params.sol_num;
    var nasaAPIKey = 'abhkFZppS4xqHplsJAV5kBJfqVcsqtbYxvLBvYB5';
    var getURL = ('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+ (parseInt(solNum, 10)+50) + '&camera=mast&api_key=' + nasaAPIKey);
    console.log('SOLNUM =' + solNum);
		var req = https.get(getURL, function(reshttp) {
		  console.log("get all todos was called");
      console.log("getURL: "+ getURL)
		  //console.log('STATUS: ' + reshttp.statusCode);
		  //console.log('HEADERS: ' + JSON.stringify(reshttp.headers));

		  // Buffer the body entirely for processing as a whole.
		  var bodyChunks = [];
		  reshttp.on('data', function(chunk) {
			// You can process streamed parts here...
			bodyChunks.push(chunk);
		  }).on('end', function() {
			var body = Buffer.concat(bodyChunks);
			var jsonBody = JSON.parse(body);
      //console.log('INIT BODY: ' + JSON.stringify(jsonBody));
      console.log('SOLNUM: ' + solNum);
      if (jsonBody.error || jsonBody.photos.length == 0){
        returnData = ""
      }
      else{
        returnData = (jsonBody.photos[0].img_src)
      }
			console.log('BODY: ' + JSON.stringify(returnData));
			//reshttp.json(jsonBody.photos[0].img_src);
			// ** the args in .get and .post are special.
			//req is the request, res is the result
			//must call res.send or res.json to actually trigger the callback, and finish this get request.
			res.send(returnData);
			// ...and/or process the entire body here.
		  })
		});
		req.on('error', function(e) {
		  console.log('ERROR: ' + e.message);
		});
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        /*Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });*/
		console.log("create todo and send back all todos after creation was called");
    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
       /* Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });*/
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
