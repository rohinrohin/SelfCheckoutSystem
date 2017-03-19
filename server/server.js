var express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request'),
  pr = require('pg');

var app = express();
// this initializes a connection pool it will keep idle connections open for a 30
// seconds and set a limit of maximum 10 idle clients
var pool = new pg.Pool(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log('Interface start at PORT 3000!')
});

// to run a query we can acquire a client from the pool, run a query on the
// client, and then return the client to the pool
pool.connect(function (err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err);
  }
  client
    .query('SELECT $1::int AS number', ['1'], function (err, result) {
      // call `done(err)` to release the client back to the pool (or destroy it if
      // there is an error)
      done(err);

      if (err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].number);
      //output: 1
    });
});

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
})
