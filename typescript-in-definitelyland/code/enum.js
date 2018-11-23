"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suit;
(function (Suit) {
    Suit[Suit["Heart"] = 0] = "Heart";
    Suit[Suit["Diamond"] = 1] = "Diamond";
    Suit[Suit["Club"] = 2] = "Club";
    Suit[Suit["Spade"] = 3] = "Spade";
})(Suit || (Suit = {}));
exports.Suit = Suit;
console.log(Suit.Heart, Suit[Suit.Heart]);
console.log(7 /* All */);
var Tree;
(function (Tree) {
    Tree["Node"] = "node";
    Tree["Leaf"] = "leaf";
})(Tree || (Tree = {}));
exports.Tree = Tree;
console.log(Tree.Node);
