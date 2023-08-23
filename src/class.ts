class Player {
  name: string;
  age: number;
  country: string;
  constructor(n:string, a:number, c:string){
    this.name=n;
    this.age=a;
    this.country=c;
  }
  play(){
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const sakib = new Player("Sakib", 35, "Bangladesh");
const villain = new Player("Villain", 50, "Villa");

console.log(sakib.name);
const players: Player[] = [];
players.push(sakib)
players.push(villain)
