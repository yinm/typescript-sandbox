"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let node = {
    type: 'add',
    left: {
        type: 'add',
        left: { type: 'leaf', value: 10 },
        right: { type: 'leaf', value: 3 },
    },
    right: {
        type: 'leaf',
        value: 5,
    }
};
console.log(calc(node));
function calc(root) {
    switch (root.type) {
        case 'leaf':
            return root.value;
        case 'add':
            return calc(root.left) + calc(root.right);
        default:
            throw new Error('unknown node');
    }
}
