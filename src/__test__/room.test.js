import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";

const should = chai.should();
chai.use(chaiHttp);

let id;

describe("/GET rooms", () => {
  it("GET all the rooms", (done) => {
    chai
      .request(app)
      .get("/api/v1/rooms")
      .end((err, res) => {
        if (err) console.log(err);
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});

describe("/POST room", () => {
  it("room should be added", (done) => {
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
      form: [
        {
          numberOfPeople: "lorem",
          numberOfChildren: "lorem",
        },
      ],
    };

    chai
      .request(app)
      .post("/api/v1/rooms")
      .send(newRoom)
      .end((err, res) => {
        if (err) console.log(err);
        res.should.have.status(201);
        res.body.should.be.a("object");
        id = res.body._id;
        done();
      });
  });
});

describe("/PUT room", () => {
  it("room should be updated", (done) => {
    const updateReservation = {
      isReserved: false,
      isAvailability: false,
      form: [
        {
          numberOfPeople: "lorem",
          numberOfChildren: "lorem",
        },
      ],
    };
    chai
      .request(app)
      .put("/api/v1/rooms/" + id)
      .send(updateReservation)
      .end((err, res) => {
        if (err) console.log(err);
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
