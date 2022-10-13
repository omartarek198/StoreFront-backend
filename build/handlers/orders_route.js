"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var orders_1 = require("../models/orders");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var utils_1 = require("../utils");
var order = new orders_1.Order();
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var all_orders;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, order.index()];
            case 1:
                all_orders = _a.sent();
                res.json(all_orders);
                return [2 /*return*/];
        }
    });
}); };
var order_routes = function (app) {
    app.get("/orders", index);
    app.get("/orders/show", showOrder);
    app.post("/orders/insert", insertOrder);
    app.post("/orders/AddToCart", AddToCart);
    app["delete"]("/products/delete", deleteOrder);
    app.get("/orders/:userid/showcurrent", getCurrentOrder);
};
var showOrder = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_1, id, target_order, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(_req.body.token);
                console.log(_req.body.tst);
                return [4 /*yield*/, jsonwebtoken_1["default"].verify(_req.body.token, process.env.TOKEN_SECRET)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(401);
                res.json("invalid token " + err_1);
                return [2 /*return*/];
            case 3:
                id = Number(_req.query.id);
                if (!utils_1.IsValidNumber(id)) {
                    res.status(400);
                    res.json("Invalid input");
                    return [2 /*return*/];
                }
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, order.show(id)];
            case 5:
                target_order = _a.sent();
                res.json(target_order);
                return [3 /*break*/, 7];
            case 6:
                err_2 = _a.sent();
                console.log(err_2);
                res.status(400);
                res.json(err_2);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
var insertOrder = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, err_3, usr_id, _a, _b, err_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                order = new orders_1.Order();
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                console.log(_req.body.token);
                console.log(_req.body.tst);
                return [4 /*yield*/, jsonwebtoken_1["default"].verify(_req.body.token, process.env.TOKEN_SECRET)];
            case 2:
                _c.sent();
                return [3 /*break*/, 4];
            case 3:
                err_3 = _c.sent();
                res.status(401);
                res.json("invalid token " + err_3);
                return [2 /*return*/];
            case 4:
                usr_id = Number(_req.query.userId);
                if (!utils_1.IsValidNumber(usr_id)) {
                    res.status(400);
                    res.json("Invalid input");
                    return [2 /*return*/];
                }
                _c.label = 5;
            case 5:
                _c.trys.push([5, 7, , 8]);
                _b = (_a = res).json;
                return [4 /*yield*/, order.create(usr_id)];
            case 6:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 8];
            case 7:
                err_4 = _c.sent();
                console.log(err_4);
                res.status(400);
                res.json(err_4);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
var deleteOrder = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, id, deleted_order, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                order = new orders_1.Order();
                id = Number(_req.query.id);
                if (!utils_1.IsValidNumber(id)) {
                    res.status(400);
                    res.json("Invalid input");
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, order["delete"](id)];
            case 2:
                deleted_order = _a.sent();
                res.json(deleted_order);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.log(err_5);
                res.status(400);
                res.json(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var AddToCart = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, err_6, order_id, product_id, quantity, _a, _b, err_7;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                order = new orders_1.Order();
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                console.log(_req.body.token);
                console.log(_req.body.tst);
                return [4 /*yield*/, jsonwebtoken_1["default"].verify(_req.body.token, process.env.TOKEN_SECRET)];
            case 2:
                _c.sent();
                return [3 /*break*/, 4];
            case 3:
                err_6 = _c.sent();
                res.status(401);
                res.json("invalid token " + err_6);
                return [2 /*return*/];
            case 4:
                order_id = Number(_req.query.orderId);
                product_id = Number(_req.query.productId);
                quantity = Number(_req.query.quantity);
                if (!utils_1.IsValidNumber(order_id) ||
                    !utils_1.IsValidNumber(product_id) ||
                    !utils_1.IsValidNumber(quantity)) {
                    res.status(400);
                    res.json("Invalid input");
                    return [2 /*return*/];
                }
                _c.label = 5;
            case 5:
                _c.trys.push([5, 7, , 8]);
                _b = (_a = res).json;
                return [4 /*yield*/, order.addToOrder(order_id, product_id, quantity)];
            case 6:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 8];
            case 7:
                err_7 = _c.sent();
                console.log(err_7);
                res.status(400);
                res.json(err_7);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
var getCurrentOrder = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userid, order, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.log(_req.params.userid);
                userid = Number(_req.params.userid);
                if (!utils_1.IsValidNumber(userid)) {
                    res.status(400);
                    res.json("Invalid input");
                    return [2 /*return*/];
                }
                order = new orders_1.Order();
                _b = (_a = res).json;
                return [4 /*yield*/, order.getCurrentOrders(userid)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); };
exports["default"] = order_routes;
