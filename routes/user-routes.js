var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router;
var User = require('../models/user-model');

module.exports = function(router) {
  router.use(bodyParser.json());

};
