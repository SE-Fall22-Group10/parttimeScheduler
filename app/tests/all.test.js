const axios = require("axios");
jest.mock("axios");
const User = require("../routes/user");

const request = require("supertest");
const baseURL = "http://localhost:8080";


////////////////////////////////////////////////////////////////////////////////////////////
/*
 *
 * USER ROUTES
 *
 */
////////////////////////////////////////////////////////////////////////////////////////////
describe("Signup users", () => {
  const data = { email: "xyza@ncsu.edu", password: "uvw", role: "Employee" };
  beforeAll(async () => {
    // set up the todo
    await request(baseURL).post("/signup").send(data);
  });
  it("Should return status 200", async () => {
    const response = await request(baseURL).get("/signup");
    expect(response.statusCode).toBe(200);
  });
});

describe("Login users", () => {
  const data = { email: "xyza@ncsu.edu", password: "uvw" };
  beforeAll(async () => {
    // set up the todo
    await request(baseURL).post("/login").send(data);
  });
  it("Should return status 200", async () => {
    const response = await request(baseURL).get("/login");
    expect(response.statusCode).toBe(200);
  });
});

describe("Get all users", () => {
  beforeAll(async () => {
    // set up the todo
    await request(baseURL).get("/users");
  });
  it("Should return status 200", async () => {
    const response = await request(baseURL).get("/users");
    expect(response.statusCode).toBe(200);
  });
});

describe("Get details for one user", () => {
  beforeAll(async () => {
    // set up the todo
    await request(baseURL).get("/getUserDetails");
  });
  it("Should return status 200", async () => {
    const response = await request(baseURL).get("/getUserDetails");
    expect(response.statusCode).toBe(200);
  });
});

////////////////////////////////////////////////////////////////////////////////////////////
/*
 *
 * USERSHIFT ROUTES
 *
 */
////////////////////////////////////////////////////////////////////////////////////////////

describe("Add Shifts", () => {
  const data = {
    email: "xyza@ncsu.edu",
    shiftFrom: "October 10, 2022 10:00:00",
    shiftTill: "October 10, 2022 12:00:00",
    storeName: "Outfitters",
  };
  beforeAll(async () => {
    // set up the todo
    await request(baseURL).post("/addShift").send(data);
  });
  it("Should return status 200", async () => {
    const response = await request(baseURL).get("/addShift");
    expect(response.statusCode).toBe(200);
  });
});

describe("Update Shifts", () => {
  const data = {
    email: "xyza@ncsu.edu",
    shiftFrom: "October 10, 2022 10:00:00",
    shiftTill: "October 10, 2022 12:00:00",
    storeName: "Outfitters",
    shiftId: "633faa45f9cc3866f968833b",
  };
  beforeAll(async () => {
    // set up the todo
    await request(baseURL).post("/updateShift").send(data);
  });
  it("Should return status 200", async () => {
    const response = await request(baseURL).get("/updateShift");
    expect(response.statusCode).toBe(200);
  });
});

describe("Offer Shifts", () => {
    const data = {
      email: "xyza@ncsu.edu",
      shiftId: "633faa45f9cc3866f968833b",
    };
    beforeAll(async () => {
      // set up the todo
      await request(baseURL).post("/offerShift").send(data);
    });
    it("Should return status 200", async () => {
      const response = await request(baseURL).get("/offerShift");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("Applying for Shift Bids", () => {
    const data = {
      email: "xyza@ncsu.edu",
      shiftId: "633faa45f9cc3866f968833b",
      takerid: "633e6f8f29b4c83be63f1fd3"
    };
    beforeAll(async () => {
      // set up the todo
      await request(baseURL).post("/applyBid").send(data);
    });
    it("Should return status 200", async () => {
      const response = await request(baseURL).get("/applyBid");
      expect(response.statusCode).toBe(200);
    });
  });
  

  describe("Applying for Shift Bids", () => {
    const data = {
      email1: "abcd@ncsu.edu",
      email2: "abcde@ncsu.edu",
      id1: 0,
      id2: 0
    };
    beforeAll(async () => {
      // set up the todo
      await request(baseURL).post("/tradeShift").send(data);
    });
    it("Should return status 200", async () => {
      const response = await request(baseURL).get("/tradeShift");
      expect(response.statusCode).toBe(200);
    });
  });
  
  
  describe("Removing Shifts", () => {
    const data = {
      email: "abcd@ncsu.edu",
      shiftId: "6340dd533d18ebd731966a8d",

    };
    beforeAll(async () => {
      // set up the todo
      await request(baseURL).post("/removeShift").send(data);
    });
    it("Should return status 200", async () => {
      const response = await request(baseURL).get("/removeShift");
      expect(response.statusCode).toBe(200);
    });
  });
  
  describe("Removing Employee from store", () => {
    const data = {
      employeeEmail: "abcd@ncsu.edu",
      storeName: "Outfitters",

    };
    beforeAll(async () => {
      // set up the todo
      await request(baseURL).post("/removeEmployeeFromStore").send(data);
    });
    it("Should return status 200", async () => {
      const response = await request(baseURL).get("/removeEmployeeFromStore");
      expect(response.statusCode).toBe(200);
    });
  });
  
  