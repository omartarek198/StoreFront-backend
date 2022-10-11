"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_routes_1 = __importDefault(require("./handlers/users_routes"));
var products_routes_1 = __importDefault(require("./handlers/products_routes"));
var app = express_1["default"]();
var address = "0.0.0.0:3000";
app.use(body_parser_1["default"].urlencoded());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.get('/', function requestHandler(req, res) {
    console.log("HMMM");
    res.end('Hello, World!');
});
products_routes_1["default"](app);
users_routes_1["default"](app);
app.listen(3000, function () {
    console.log("starting app on: " + address);
});
