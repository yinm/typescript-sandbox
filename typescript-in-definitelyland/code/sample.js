"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    sleep() {
        return 'zzzZZZ...';
    }
}
// new Animal()
class Cat extends Animal {
    constructor() {
        super(...arguments);
        this.name = 'Cat';
        this.poo = 'poo....';
    }
    speak() {
        return 'meow';
    }
}
new Cat();
