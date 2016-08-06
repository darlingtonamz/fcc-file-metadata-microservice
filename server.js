'use strict';

var express = require('express');
var path = require('path');
var routes = require('./app/routes/index.js');
var api = require('./app/api/meta.js');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var port = process.env.PORT || 8080;
app.listen(port, function() {
  routes(app);
  api(app);
  console.log('listening on port ' + port);
});
