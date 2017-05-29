var https = require('https');

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {

		/*var options = {
		  host: 'www.google.com',
		  path: '/index.html'
		};*/

		var req = https.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=DEMO_KEY', function(res) {
		  console.log('STATUS: ' + res.statusCode);
		  console.log('HEADERS: ' + JSON.stringify(res.headers));

		  // Buffer the body entirely for processing as a whole.
		  var bodyChunks = [];
		  res.on('data', function(chunk) {
			// You can process streamed parts here...
			bodyChunks.push(chunk);
		  }).on('end', function() {
			var body = Buffer.concat(bodyChunks);
			var jsonBody = JSON.parse(body);
			console.log('BODY: ' + JSON.stringify(jsonBody.photos[0]));
			// ...and/or process the entire body here.
		  })
		});
		req.on('error', function(e) {
		  console.log('ERROR: ' + e.message);
		});
		console.log("get all todos was called");
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
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
