import { get } from "request-promise-native";
import { StatusCodeError } from "request-promise-native/errors";
import { expect } from "chai";

describe("calculator server", function() {
  this.timeout(5000);
  this.slow(5000);

  describe("add service", function() {
    it("harusnya bisa melakukan operasi pertambahan", async function() {
      const result = await get("http://localhost:3000/add?n1=4&n2=3", {
        json: true
      });
      expect(result).to.be.deep.eq({
        result: 7
      });
    });

    it("harusnya error ketika input bukan angka", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/add?n1=4&n2=hahaha", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });

    it("harusnya error ketika input tidak ada", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/add", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });
  });

  it("harusnya error ketika akses endpoint yang tidak ada", async function() {
    let error = null;
    try {
      await get("http://localhost:3000/ajduaquajfkjabfka", { json: true });
    } catch (err) {
      error = err;
    }
    expect(error).to.be.exist;
    expect(error).to.be.instanceOf(StatusCodeError);
    expect(error.statusCode).to.be.eq(404);
  });
});
