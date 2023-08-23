import {Player} from "./classes/player.js";



// const sakib = new Player("Sakib", 35, "Bangladesh");
// const villain = new Player("Villain", 50, "Villa");

// console.log(sakib.name);
// console.log(sakib.country);

// const players: Player[] = [];

// players.push(sakib);
// players.push(villain);


interface RectangleOptions{
    width:number;
    length: number;
}

function drawRectangle(options: RectangleOptions){
    let width: options.width;
    let length: options.length;
}

drawRectangle({
    width: 30,
    length: 20,
})