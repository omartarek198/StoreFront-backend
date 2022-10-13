"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var utils_2 = require("../utils");
describe('testing validate input functions', function () {
    it('expect IsValidNumber(5) to equal true ', function () {
        expect(utils_1.IsValidNumber(5)).toEqual(true);
    });
    it('expect IsValidNumber(-5) to equal false ', function () {
        expect(utils_1.IsValidNumber(-5)).toEqual(false);
    });
    it('expect IsValidNumber(abc) to equal false ', function () {
        expect(utils_1.IsValidNumber(Number("abc"))).toEqual(false);
    });
    it('expect IsValidString("hi" ) to equal true ', function () {
        expect(utils_2.IsValidString("hi")).toEqual(true);
    });
    it('expect IsValidString(undefined ) to equal false ', function () {
        //using any here to pass S into IsValidString which only accepts string
        var s = undefined;
        expect(utils_2.IsValidString(s)).toEqual(false);
    });
});
