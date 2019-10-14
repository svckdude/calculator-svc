import { get } from "request-promise-native";
import { StatusCodeError } from "request-promise-native/errors";
import { expect } from "chai";

describe("Calculator server", function() {
  // this.timeout(5000);
  // this.slow(5000);

  describe("Successful request", function() {
    it("/add", async function() {
      const result = await get("http://localhost:5000/add?n1=4&n2=3", {
        json: true
      });
      expect(result).to.be.eq(7);
    });
  
    it("/subtract", async function() {
      const result = await get("http://localhost:5000/subtract?n1=4&n2=3", {
        json: true
      });
      expect(result).to.be.eq(1);
    });

    it("/multiply", async function() {
      const result = await get("http://localhost:5000/multiply?n1=4&n2=3", {
        json: true
      });
      expect(result).to.be.eq(12);
    });

    it("/divide", async function() {
      const result = await get("http://localhost:5000/divide?n1=24&n2=3", {
        json: true
      });
      expect(result).to.be.eq(8);
    });
  });

  context("Invalid URL", function() {
    it("Invalid URL query type", async function() {
      let error = null;
      try {
        await get("http://localhost:5000/add?n1=4&n2=hahaha", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });
  
    it("No URL query", async function() {
      let error = null;
      try {
        await get("http://localhost:5000/add", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });

    it("Invalid URL endpoint", async function() {
      let error = null;
      try {
        await get("http://localhost:5000/ajduaquajfkjabfka", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(404);
    });
  });
});  
