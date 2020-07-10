console.log('Hello TypeScript!');

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(5, 10);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Rangel') {
  return firstName + ' ' + lastName;
}

const luis = fullName('Luis');

// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;

// String
let nombre: string = 'Luis';

// Arreglos
let people: string[] = [];
people = ['Luis', 'Reyna'];
people.push('9000');

let peopleAndNumbers: Array<string | number | boolean> = [];
peopleAndNumbers.push('Luis');
peopleAndNumbers.push(true);
peopleAndNumbers.push(3000);

enum Color {
  Rojo,
  Verde,
  Azul,
}

enum Color2 {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo;
console.log(`mi color favorito es ${colorFavorito}`);

let colorFavorito2: Color2 = Color2.Rojo;
console.log(`mi color favorito es ${colorFavorito2}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcar' };

// Object
let someObject: object = { type: 'Wildcar' };

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color2;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 3,
};


function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `un rectangulo sin color`;
};
console.log(rect.toString());
rect.color = Color2.Verde;
console.log(rect.toString());
