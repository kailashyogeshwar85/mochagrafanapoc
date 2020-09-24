const chai = require('chai');
const chaiHttp = require('chai-http')
const expect = chai.expect;

const server = require('../');

chai.use(chaiHttp);

describe('#Users', () => {
  it('should list users', () => {
    chai
      .request(server)
      .get('/users')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.eql(200);
      })
  });
})
