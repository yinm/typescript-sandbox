"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let el1 = null;
el1.addEventListener('click', function () {
    this.innerText = 'Hi!';
});
el1.addEventListener('click', () => {
    // this.innerText = 'Hi!'
});
let el2 = null;
el2.addEventListener('click', function () {
    this.innerText = 'Hi!';
});
