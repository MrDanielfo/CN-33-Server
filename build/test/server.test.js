"use strict";

var server = require('../index');

var request = require('request');

var should = require('chai').should();

var HOST = 'http://localhost:4000';
var token;
describe('server on', function () {
  it('Debería registrar a un usuario', function (done) {
    var json = {
      operation: null,
      query: "mutation addUser($data: UserInput) { addUser(data:$data) {token} }",
      variables: {
        "data": {
          "name": "user test",
          "lastName": "last name test",
          "email": "test@gmail.com",
          "password": "123"
        }
      }
    };
    request.post({
      url: HOST,
      json: json
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      token = body.data.addUser.token;
      done(err);
    });
  });
  it('Debe hacer petición de libros', function (done) {
    var json = {
      operation: null,
      query: "{ books{ title } }"
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token
      }
    }, function (err, res, body) {
      var books = body.data.books;
      console.log(books);
      done(err);
    });
  });
});
//# sourceMappingURL=server.test.js.map