"use strict";
class DataContainer {
    print() {
        console.log(this.data);
    }
}
const obj1 = new DataContainer();
obj1.data = '';
// obj1.data = 1
const obj2 = new DataContainer();
obj2.data = 1;
