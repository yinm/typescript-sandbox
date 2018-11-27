"use strict";
exports.__esModule = true;
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var LetterOnlyValidator_1 = require("./LetterOnlyValidator");
var strings = ['Hello', '98852', '101'];
var validators = {};
validators['ZIP code'] = new ZipCodeValidator_1.ZipCodeValidator();
validators['Letters only'] = new LetterOnlyValidator_1.LetterOnlyValidator();
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? 'matches' : 'does not match') + " " + name_1);
    }
});
