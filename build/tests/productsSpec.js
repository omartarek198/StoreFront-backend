"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
var products_1 = require("../models/products");
var product = new products_1.Product();
product.set("p1", "tech", 1200);
describe("testing product CRUD", function () {
  it("has an index method", function () {
    expect(product.index).toBeDefined();
  });
  it("has a create method", function () {
    expect(product.create).toBeDefined();
  });
  it("has a update method", function () {
    expect(product.update).toBeDefined();
  });
  it("has a delete method", function () {
    expect(product["delete"]).toBeDefined();
  });
  it("expect index() to equal [] ", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = expect;
            return [4 /*yield*/, product.index()];
          case 1:
            _a.apply(void 0, [_b.sent()]).toEqual([]);
            return [2 /*return*/];
        }
      });
    });
  });
  it("expect create(product_fn,product_ln,product_category) to equal [product_fn,product_ln,product_category] ", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var created_obj;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, product.create()];
          case 1:
            created_obj = _a.sent();
            expect(created_obj).toEqual([
              {
                id: 1,
                name: "p1",
                price: "1200",
                category: "tech",
              },
            ]);
            return [2 /*return*/];
        }
      });
    });
  });
  it("expect show(id) to equal [product_fn,product_ln,product_category] ", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var selected_obj;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, product.show(1)];
          case 1:
            selected_obj = _a.sent();
            expect(selected_obj).toEqual([
              {
                id: 1,
                name: "p1",
                price: "1200",
                category: "tech",
              },
            ]);
            return [2 /*return*/];
        }
      });
    });
  });
  it("expect update() to equal [product_fn,product_ln,newcategory] ", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var updated_obj;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            product.set("p1", "food", 50);
            return [4 /*yield*/, product.update(1)];
          case 1:
            updated_obj = _a.sent();
            expect(updated_obj).toEqual([
              {
                id: 1,
                name: "p1",
                price: "50",
                category: "food",
              },
            ]);
            return [2 /*return*/];
        }
      });
    });
  });
  it("expect delete() to equal [product_fn,product_ln,newcategory] ", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var deleted_obj;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, product["delete"](1)];
          case 1:
            deleted_obj = _a.sent();
            expect(deleted_obj).toEqual([
              {
                id: 1,
                name: "p1",
                price: "50",
                category: "food",
              },
            ]);
            return [2 /*return*/];
        }
      });
    });
  });
});
