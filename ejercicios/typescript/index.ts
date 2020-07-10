console.log('Hello TypeScript!');

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(5, 10);

// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador : number = 42;

// String
let nombre : string = 'Luis';

// Arreglos
let people: string[] = [];
people = ['Luis','Reyna'];
people.push('9000');

let peopleAndNumbers: Array<string | number | boolean> = [];
peopleAndNumbers.push('Luis');
peopleAndNumbers.push(true);
peopleAndNumbers.push(3000);

enum Color {
  Rojo,
  Verde,
  Azul
}

enum Color2 {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul'
}

let colorFavorito:Color = Color.Rojo;
console.log(`mi color favorito es ${colorFavorito}`);

let colorFavorito2:Color2 = Color2.Rojo;
console.log(`mi color favorito es ${colorFavorito2}`);
