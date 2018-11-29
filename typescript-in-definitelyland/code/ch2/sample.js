"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    static sleep() {
        return 'zzzZZZ...';
    }
    claim() {
        return this.name;
    }
}
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
