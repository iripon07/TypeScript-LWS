class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}
  play() {
    console.log(`${this.name} from ${this.country} is playing!!!`);
  }
}

const sakib = new Player("Sakib", 35, "Bangladesh");
const villain = new Player("Villain", 50, "Villa");

sakib.name ="Villain";
sakib.age=40;
sakib.country="Uganda";
console.log(sakib.country);
console.log(sakib.name);
console.log(sakib.age);


