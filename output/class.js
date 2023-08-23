"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const sakib = new Player("Sakib", 35, "Bangladesh");
const villain = new Player("Villain", 50, "Villa");
console.log(sakib.name);
const players = [];
players.push(sakib);
players.push(villain);
