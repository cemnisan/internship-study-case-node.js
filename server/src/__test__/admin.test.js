import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";

const should = chai.should();

chai.use(chaiHttp);

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
  it("token information should be obtained and loggined in", (done) => {
    chai
      .request(app)
      .post("/api/admin/login")
      .send({ username: "test", password: "12345" })
      .end((err, res) => {
        if (err) console.log(err);
        res.should.have.status(200);
        console.log('Token: ' , res.body);
        done();
      });
  });
});
