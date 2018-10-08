var Pig = /** @class */ (function () {
    function Pig() {
    }
    Pig.prototype.bow = function () {
        return 'Bow wow wow';
    };
    return Pig;
}());
var Dandy = /** @class */ (function () {
    function Dandy() {
    }
    Dandy.prototype.bow = function () {
        return 'Gooood';
    };
    Dandy.prototype.throwCard = function () {
        return 'Naaaaaaaaaaaaaaaaaaaaaa';
    };
    return Dandy;
}());
function callBow(pig) {
    console.log(pig.bow());
}
callBow(new Pig());
callBow(new Dandy());
