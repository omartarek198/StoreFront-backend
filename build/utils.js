"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.hash = exports.IsValidString = exports.IsValidNumber = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
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
  var hashed = bcrypt_1["default"].hashSync(
    x + pepper,
    parseInt(process.env.SALT_ROUNDS)
  );
  return hashed;
}
exports.hash = hash;
