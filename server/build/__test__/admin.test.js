"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const should = _chai.default.should();

_chai.default.use(_chaiHttp.default);
/*describe("/POST register", () => {
  it("user must register", (done) => {
    chai
      .request(app)
      .post("/api/admin/register")
      .send({
        username: "cem1",
        password: "1234",
      })
      .end((err, res) => {
        if (err) console.log(err);
        res.should.have.status(201);
        res.body.should.be.a("object");
        done();
      });
  });
});*/


describe("/POST token information", () => {
  it("token information should be obtained and loggined in", done => {
    _chai.default.request(_index.default).post("/api/admin/login").send({
      username: "test",
      password: "12345"
    }).end((err, res) => {
      if (err) console.log(err);
      res.should.have.status(200);
      console.log('Token: ', res.body);
      done();
    });
  });
});
//# sourceMappingURL=admin.test.js.map