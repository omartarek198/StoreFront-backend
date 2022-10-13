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
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var users_1 = require("../models/users");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var utils_1 = require("../utils");
var utils_2 = require("../utils");
var usrs_crud = new users_1.User();
var utils_3 = require("../utils");
var user_routes = function (app) {
    app.get("/users", index);
    app.get("/users/show", showUser);
    app.post("/users/insert", addUsr);
};
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_1, all_users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, jsonwebtoken_1["default"].verify(_req.body.token, process.env.TOKEN_SECRET)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(401);
                res.json("invalid token " + err_1);
                return [2 /*return*/];
            case 3: return [4 /*yield*/, usrs_crud.index()];
            case 4:
                all_users = _a.sent();
                res.json(all_users);
                return [2 /*return*/];
        }
    });
}); };
var addUsr = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fn, ln, pwd, added_usr, token, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fn = _req.query.fn;
                ln = _req.query.ln;
                pwd = utils_3.hash(_req.query.pwd);
                if (!utils_2.IsValidString(fn) || !utils_2.IsValidString(fn) || !utils_2.IsValidString(pwd)) {
                    res.status(400);
                    res.json("Invalid input");
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usrs_crud.create(fn, ln, pwd)];
            case 2:
                added_usr = _a.sent();
                token = jsonwebtoken_1["default"].sign({ user: added_usr }, process.env.TOKEN_SECRET);
                console.log(token);
                res.json(token);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                res.status(400);
                res.json(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var showUser = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_3, user, id, target_user, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(_req.body.token);
                return [4 /*yield*/, jsonwebtoken_1["default"].verify(_req.body.token, process.env.TOKEN_SECRET)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(401);
                res.json("invalid token " + err_3);
                return [2 /*return*/];
            case 3:
                user = new users_1.User();
                id = Number(_req.query.id);
                if (!utils_1.IsValidNumber(id)) {
                    res.status(400);
                    res.json("Invalid id");
                }
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, user.show(id)];
            case 5:
                target_user = _a.sent();
                res.json(target_user);
                return [3 /*break*/, 7];
            case 6:
                err_4 = _a.sent();
                console.log(err_4);
                res.status(400);
                res.json(err_4);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports["default"] = user_routes;
