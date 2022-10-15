"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_routes_1 = __importDefault(require("./handlers/users_routes"));
var products_routes_1 = __importDefault(require("./handlers/products_routes"));
var orders_route_1 = __importDefault(require("./handlers/orders_route"));
exports.app = express_1["default"]();
var address = "0.0.0.0:3000";
exports.app.use(body_parser_1["default"].urlencoded());
exports.app.use(body_parser_1["default"].urlencoded({ extended: true }));
exports.app.use(express_1["default"].json());
exports.app.get("/", function requestHandler(req, res) {
    console.log("HMMM");
    res.end("bye, World!");
});
products_routes_1["default"](exports.app);
users_routes_1["default"](exports.app);
orders_route_1["default"](exports.app);
exports.app.listen(3000, function () {
    console.log("starting app on: " + address);
});
