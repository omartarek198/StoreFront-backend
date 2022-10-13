import { Order } from "../models/orders";
import { User } from "../models/users";
const user = new User();

const order = new Order();

describe("testing order CRUD", () => {
  beforeAll(function () {
    console.log("Example 1 Setup");
  });

  it("has an index method", () => {
    expect(order.index).toBeDefined();
  });

  it("has a create method", () => {
    expect(order.create).toBeDefined();
  });

  it("has a delete method", () => {
    expect(order.delete).toBeDefined();
  });

  it("expect index() to equal [] ", async () => {
    expect(await order.index()).toEqual([]);
  });
});
