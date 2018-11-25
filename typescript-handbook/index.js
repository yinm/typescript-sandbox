var GenericType = /** @class */ (function () {
    function GenericType() {
    }
    return GenericType;
}());
var myGenericString = new GenericType();
myGenericString.zeroValue = '';
myGenericString.add = function (x, y) { return x + y; };
console.log(myGenericString.add(myGenericString.zeroValue, 'test'));
