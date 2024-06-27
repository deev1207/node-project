const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); // Replace with your actual app entry point

const { expect } = chai;
chai.use(chaiHttp);

describe('User API Tests', () => {
  it('should list all users', (done) => {
    chai.request(app)
      .get('/worko/user')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should create a new user', (done) => {
    chai.request(app)
      .post('/worko/user')
      .send({
        email: 'test@example.com',
        name: 'Test User',
        age: 30,
        city: 'Test City',
        zipCode: '12345',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('_id');
        done();
      });
  });

  // Add more tests for other endpoints as needed
});
