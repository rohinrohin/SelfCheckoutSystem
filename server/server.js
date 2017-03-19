var express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request'),
  pg = require('pg');

var app = express();

// create a config to configure both pooling behavior and client options
// note: all config is optional and the environment variables will be read if
// the config is not present
var config = {
  user: 'scshandler', //env var: PGUSER
  database: 'scstest', //env var: PGDATABASE
  password: 'scshandler', //env var: PGPASSWORD
  host: 'rohin.me', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
};

var pool = new pg.Pool(config);
// this initializes a connection pool it will keep idle connections open for a
// 30 seconds and set a limit of maximum 10 idle clients

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/test', function (req, res) {
  pool
    .connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }
      client
        .query('SELECT * FROM PRODUCTS', function (err, result) {
          // call `done(err)` to release the client back to the pool (or destroy it if
          // there is an error)
          done(err);
          if (err) {
            return console.error('error running query', err);
          }
          res.send(result);
          //output: 1
        });
    });
});

app.post('/interface', function (req, res) {
  console.log("GOT QUERY REQ: ", req.body)
  pool
    .connect(function (err, client, done) {
      if (err) {
        res.send("Error fetching client from pool. ");
        return console.error('error fetching client from pool', err);
      }
      client
        .query(req.body.query, function (err, result) {
          // call `done(err)` to release the client back to the pool (or destroy it if
          // there is an error)
          done(err);
          if (err) {
            res.send("Error running Query. ");
            return console.error('error running query', err);
          }
          res.setHeader("Content-Type", "application/json")
          res.send(JSON.stringify(result));
          console.log("SENT RESPONSE: ", result)
          //output: 1
        });
    });
});

app.listen(3000, function () {
  console.log('Interface start at PORT 3000!')
});

// to run a query we can acquire a client from the pool, run a query on the
// client, and then return the client to the pool

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
})
