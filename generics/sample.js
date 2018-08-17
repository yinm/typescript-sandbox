var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    MyData.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
var v1 = new MyData('hello');
console.log(v1.getArray());
var v2 = new MyData(123);
console.log(v2.getArray());
