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
var products_1 = require("../models/products");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var products_crud = new products_1.Product();
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var all_products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, products_crud.index()];
            case 1:
                all_products = _a.sent();
                res.json(all_products);
                return [2 /*return*/];
        }
    });
}); };
var products_routes = function (app) {
    app.get("/products", index);
    app.get("/products/show", showProduct);
    app.post("/products/insert", addProduct);
    app.get("/products/filter", getProductsByCat);
    app["delete"]("/products/delete", deleteProduct);
};
var showProduct = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, id, all_products, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                product = new products_1.Product();
                id = Number(_req.query.id);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, product.show(id)];
            case 2:
                all_products = _a.sent();
                res.json(all_products);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var addProduct = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, err_2, name, category, price, _a, _b, err_3;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                product = new products_1.Product();
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
                err_2 = _c.sent();
                res.status(401);
                res.json("invalid token " + err_2);
                return [2 /*return*/];
            case 4:
                name = _req.query.name;
                category = _req.query.category;
                price = Number(_req.query.price);
                _c.label = 5;
            case 5:
                _c.trys.push([5, 7, , 8]);
                console.log(name);
                console.log(category);
                console.log(price);
                product.set(name, category, price);
                _b = (_a = res).json;
                return [4 /*yield*/, product.insert()];
            case 6:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 8];
            case 7:
                err_3 = _c.sent();
                console.log(err_3);
                res.status(400);
                res.json(err_3);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
var deleteProduct = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, id, deleted_product, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                product = new products_1.Product();
                id = Number(_req.query.id);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, product["delete"](id)];
            case 2:
                deleted_product = _a.sent();
                res.json(deleted_product);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.log(err_4);
                res.status(400);
                res.json(err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getPopProducts = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, pop_products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = Number(_req.query.id);
                return [4 /*yield*/, products_crud.popular(id)];
            case 1:
                pop_products = _a.sent();
                res.json(pop_products);
                return [2 /*return*/];
        }
    });
}); };
var getProductsByCat = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var category, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                category = _req.query.category;
                return [4 /*yield*/, products_crud.getByCateory(category)];
            case 1:
                products = _a.sent();
                res.json(products);
                return [2 /*return*/];
        }
    });
}); };
exports["default"] = products_routes;
