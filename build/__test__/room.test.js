"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const should = _chai.default.should();

_chai.default.use(_chaiHttp.default);

let id;
describe("/GET rooms", () => {
  it("GET all the rooms", done => {
    _chai.default.request(_index.default).get("/api/v1/rooms").end((err, res) => {
      if (err) console.log(err);
      res.should.have.status(200);
      res.body.should.be.a("array");
      done();
    });
  });
});
describe("/POST room", () => {
  it("room should be added", done => {
    const newRoom = {
      roomName: "room",
      maxPerson: 3,
      roomFeatures: ["room one", "room two"],
      bedOptions: ["room one", "room two"],
      descriptions: "Lorem ipsum",
      isReserved: false,
      isAvailability: false,
      isAlteration: false,
      roomPrice: 200,
      form: [{
        numberOfPeople: "lorem",
        numberOfChildren: "lorem"
      }]
    };

    _chai.default.request(_index.default).post("/api/v1/rooms").send(newRoom).end((err, res) => {
      if (err) console.log(err);
      res.should.have.status(201);
      res.body.should.be.a("object");
      id = res.body._id;
      done();
    });
  });
});
describe("/PUT room", () => {
  it("room should be updated", done => {
    const updateReservation = {
      isReserved: false,
      isAvailability: false,
      form: [{
        numberOfPeople: "lorem",
        numberOfChildren: "lorem"
      }]
    };

    _chai.default.request(_index.default).put("/api/v1/rooms/" + id).send(updateReservation).end((err, res) => {
      if (err) console.log(err);
      res.should.have.status(200);
      res.body.should.be.a("object");
      done();
    });
  });
});