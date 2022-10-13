"use strict";
exports.__esModule = true;
exports.IsValidString = exports.IsValidNumber = void 0;
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
