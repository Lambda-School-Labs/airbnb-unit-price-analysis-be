const request = require("supertest");
const db = require("../data/dbConfig");

const server = require("../api/server");

describe("listings", () => {
  let token;

  beforeAll(async () => {
    await db("listings").truncate();
  });

  describe("retrieve a listing", () => {
    it("should return a 500", () => {
      const email = "fake-email@email.com";

      return request(server)
        .post("/api/listings/save")
        .send(email)
        .then(res => {
          console.log(JSON.stringify(res.body));
          expect(res.status).toBe(500);
          token = res.body.token;
        });
    });
  });

  describe("retrieve listings db", () => {
    it("should return a 200", () => {
      return request(server)
        .get("/api/listings")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
