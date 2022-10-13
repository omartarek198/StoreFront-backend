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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.Order = void 0;
var database_1 = __importDefault(require("../database"));
var Order = /** @class */ (function () {
  function Order() {
    this.prod_id = 0;
    this.usr_id = 0;
    this.status = 0;
  }
  Order.prototype.set = function (prod_id, usr_id, status) {
    this.prod_id = prod_id;
    this.usr_id = usr_id;
    this.status = status;
    //valid
    return 1;
  };
  Order.prototype.insert = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var conn, sql, result, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, , 4]);
            return [4 /*yield*/, database_1["default"].connect()];
          case 1:
            conn = _a.sent();
            sql =
              "INSERT INTO ORDERS (user_id,status) VALUES (" +
              id +
              "," +
              1 +
              ") RETURNING *;";
            return [4 /*yield*/, conn.query(sql)];
          case 2:
            result = _a.sent();
            conn.release();
            console.log(result.rows);
            console.log(result.rows);
            return [2 /*return*/, result.rows];
          case 3:
            err_1 = _a.sent();
            throw new Error("Cannot  insert :  " + err_1);
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  Order.prototype.addToOrder = function (order_id, product_id, quantity) {
    return __awaiter(this, void 0, void 0, function () {
      var conn, sql, result, err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, , 4]);
            console.log(product_id);
            console.log(quantity);
            console.log(order_id);
            return [4 /*yield*/, database_1["default"].connect()];
          case 1:
            conn = _a.sent();
            sql =
              "INSERT INTO ORDERS_PRODUCTS (quantity, order_id,product_id) VALUES (" +
              quantity +
              ", " +
              order_id +
              ", " +
              product_id +
              ") RETURNING *;";
            return [4 /*yield*/, conn.query(sql)];
          case 2:
            result = _a.sent();
            conn.release();
            return [2 /*return*/, result.rows];
          case 3:
            err_2 = _a.sent();
            throw new Error("Cannot  insert :  " + err_2);
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  Order.prototype.index = function () {
    return __awaiter(this, void 0, void 0, function () {
      var conn, sql, result, err_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, , 4]);
            return [4 /*yield*/, database_1["default"].connect()];
          case 1:
            conn = _a.sent();
            sql = "SELECT * FROM ORDERS;";
            return [4 /*yield*/, conn.query(sql)];
          case 2:
            result = _a.sent();
            conn.release();
            console.log(result.rows);
            console.log(result.rows);
            return [2 /*return*/, result.rows];
          case 3:
            err_3 = _a.sent();
            throw new Error("Cannot  select orders :  " + err_3);
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  Order.prototype.show = function (usr_id) {
    return __awaiter(this, void 0, void 0, function () {
      var conn, sql, result, err_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, , 4]);
            return [4 /*yield*/, database_1["default"].connect()];
          case 1:
            conn = _a.sent();
            sql = "SELECCT FROM ORDERS where user_id = " + usr_id + ";";
            return [4 /*yield*/, conn.query(sql)];
          case 2:
            result = _a.sent();
            conn.release();
            console.log(result.rows);
            console.log(result.rows);
            return [2 /*return*/, result.rows];
          case 3:
            err_4 = _a.sent();
            throw new Error("Cannot  select orders :  " + err_4);
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  Order.prototype["delete"] = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var conn, sql, result, err_5;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, , 4]);
            return [4 /*yield*/, database_1["default"].connect()];
          case 1:
            conn = _a.sent();
            sql = "DELETE  FROM orders\nWHERE id=" + id + ";\n";
            return [4 /*yield*/, conn.query(sql)];
          case 2:
            result = _a.sent();
            conn.release();
            console.log(result.rows);
            return [2 /*return*/, result.rows];
          case 3:
            err_5 = _a.sent();
            throw new Error("Cannot  show :  " + err_5);
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  Order.prototype.getCurrentOrders = function (usr_id) {
    return __awaiter(this, void 0, void 0, function () {
      var conn, sql, result, err_6;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            console.log(usr_id);
            console.log(usr_id);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 4, , 5]);
            return [4 /*yield*/, database_1["default"].connect()];
          case 2:
            conn = _a.sent();
            sql =
              "\n             SELECT * from ORDERS_PRODUCTS where order_id IN (            SELECT order_id FROM orders\nWHERE id=" +
              usr_id +
              " AND status = " +
              1 +
              "\n );";
            return [4 /*yield*/, conn.query(sql)];
          case 3:
            result = _a.sent();
            conn.release();
            console.log(result.rows);
            return [2 /*return*/, result.rows];
          case 4:
            err_6 = _a.sent();
            throw new Error("Cannot  show :  " + err_6);
          case 5:
            return [2 /*return*/];
        }
      });
    });
  };
  return Order;
})();
exports.Order = Order;
