"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sample1;
(function (sample1) {
    let $obj = angular.resource1.$resource.create();
    $obj.str = 'test';
    let obj = $obj.$insert();
    console.log(obj.str);
})(sample1 || (sample1 = {}));
exports.sample1 = sample1;
var sample2;
(function (sample2) {
    let $obj = angular.resource2.$resource.create();
    $obj.str = 'test';
    let obj = $obj.$insert();
    console.log(obj.str);
})(sample2 || (sample2 = {}));
exports.sample2 = sample2;
