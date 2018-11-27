"use strict";
exports.__esModule = true;
var letterRegexp = /^[A-Za-z]+$/;
var LetterOnlyValidator = /** @class */ (function () {
    function LetterOnlyValidator() {
    }
    LetterOnlyValidator.prototype.isAcceptable = function (s) {
        return letterRegexp.test(s);
    };
    return LetterOnlyValidator;
}());
exports.LetterOnlyValidator = LetterOnlyValidator;
