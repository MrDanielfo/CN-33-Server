const server = require('../index');
const request = require('request');
const should = require('chai').should();


const HOST = 'http://localhost:4000';
let token;
describe('server on', () => {
    it('Debería registrar a un usuario', function(done)  {
        const json = {
            operation: null,
            query: "mutation addUser($data: UserInput) { addUser(data:$data) {token} }",
            variables: { 
            "data" : {
                    "name" : "user test",
                    "lastName": "last name test",
                    "email" : "test@gmail.com",
                    "password": "123"
                }
            }   
        };

        request.post({
            url: HOST,
            json
        }, function(err, res, body) {
            should.not.exist(err);
            should.exist(res);
            expect(res.statusCode).toBe(200);
            body.should.have.property('data');
            token = body.data.addUser.token;
            
            done(err);
        })
    });
    it('Debe hacer petición de libros', function (done) {
        const json = {
            operation: null,
            query: "{ books{ title } }",
        };

        request.post({
            url: HOST,
            json,
            headers: {
                "Authorization" : token
            }
        }, function(err, res, body){
            const books = body.data.books;
            console.log(books)
            done(err);
        })

    })
});