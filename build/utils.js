"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.validate = exports.hash = exports.IsValidString = exports.IsValidNumber = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function IsValidNumber(x) {
    if (isNaN(x)) {
        return false;
    }
    if (x < 0) {
        return false;
    }
    return true;
}
exports.IsValidNumber = IsValidNumber;
function IsValidString(x) {
    if (x === undefined) {
        return false;
    }
    return true;
}
exports.IsValidString = IsValidString;
function hash(x) {
    var pepper = process.env.BCRYPT_PASSWORD;
    var hashed = bcrypt_1["default"].hashSync(x + pepper, parseInt(process.env.SALT_ROUNDS));
    return hashed;
}
exports.hash = hash;
function validate(_req, res) {
    try {
        var authorizationHeader = _req.headers.authorization;
        var token = authorizationHeader.split(' ')[1];
        jsonwebtoken_1["default"].verify(token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json("invalid token " + err);
        return false;
    }
    return true;
}
exports.validate = validate;
