var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    MyData.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
var result = {
    a: 3,
    b: 5
};
var v1 = new MyData(result);
console.log(v1.getArray());
