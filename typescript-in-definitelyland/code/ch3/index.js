"use strict";
let func;
func = word => `Hello, ${word}`;
func = (word) => {
    return `Hello, ${word}`;
};
func = function (word) {
    return `Hello, ${word}`;
};
func = () => 'Hello, Typescript';
func = (v1, v2 = 'JavaScript') => `Hello, ${v1} & ${v2}`;
