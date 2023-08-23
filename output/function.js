"use strict";
// let myFunc : Function;
const myFunc = (a, b, c = "true") => {
    console.log(c);
    console.log(`Hello ${a} and ${b}`);
};
myFunc("A", "B");
