/* jshint expr: true */
'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

var User = require('../models/user-model');

process.env.MONGO_FILESAPP_URI = 'mongodb://localhost/mongo_filesapp_test';
process.env.PORT = 3003;

chai.use(chaiHttp);

require('../server');

describe('user-model.js', function() {

  it('should create new resource for POST', function(done) {
    chai.request('localhost:3003')
        .post('/users')
        .send({name: 'Test User'})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.name).to.eql('Test User');
          done();
    });
  });

});
