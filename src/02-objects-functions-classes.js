//(1). Arrays
var arr = [];
var stringArray = new Array();
stringArray[0] = "one";
var numArray = new Array(3); //En este caso deja reservados tres bloques (index) vacíos.

//(2). Métodos de arrays
var x = ["a", "b", "c", "d"];
x.push("e"); //5
x.pop(); //"e"
x.shift(); //"a" | En este punto el array contendrá ["b", "c", "d"]
x.unshift
x.reverse();
x.splice(1, 1); //Elimina 'b'.
x.splice(1, 0, "hurray");

var x = ["a", "b", "c", "d"];
x.indexOf("c"); //2
x.indexOf("g"); //-1
var x = ["d", "a", "b", "c", "d"];
x.lastIndexOf('d'); //4
x.join(''); //"dabcd"
x.join('-'); //"d-a-b-c-d"

var arr = ["1", "2", "3", "4", "5"];
var newArr = arr.slice(1, 3); //["2", "3"] Indicamos que empezamos en el index 1 y terminamos en el 3, pero este último NO se incluye.
//Si no ponemos el segundo parámetro, es desde el índice hasta el final del array.
var newArr = arr.slice(-3, -1); //["3", "4"] Si los valores son negativos, cuenta desde el final, donde -1 es el último elemento, -2 penúltimo, etc.

var x = ["a", "d", "b", "c", "d"];
var y = [1, 2, 3, 4];
var z = x.concat(y); //["a", "d", "b", "c", "d", 1, 2, 3, 4]

var x = [
    {name: "a", age: 10},
    {name: "b", age: 40},
    {name: "c", age: 20},
    {name: "d", age: 9},
];
x.map(function(currItem, index, actualArr) {
    return {"key": currItem.name, "value": currItem.age};
});
x.every(function(currItem, index, actualArr) {
    return currItem.age > 8; //true || > 50 false || > 10 false
});
x.filter(function(currItem, index, actualArr) {
    return currItem.age > 20; //Devuelve los elementos que cumplen con la condición.
});
x.some(function(currItem, index, actualArr) {
    return currItem.age > 20; //true
});
x.sort(function(a, b) {
    return a.age - b.age;   //Array ordenado por edad de forma ascendente: 9, 10, 20, 40 
    //return b.age - a.age;   //Array ordenado por edad de forma descendente: 40, 20, 1, 9
});
x.sort(function(a, b) {
    return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;
});

var numbers = [10, 30, 50];
numbers.reduce(function (total, currItem, index, actualArr) {
    console.log("Total: ", total);
    console.log("Current value: ", currItem);
    return total + currItem;
}, 0);
var sums = numbers.reduceRight(function (total, currItem, index, actualArr) {
    console.log("Total: ", total);
    console.log("Current value: ", currItem);
    return total + currItem;
}, 0);

//(2). Bucles
const alphabets = [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'},
    {name: 'D'}
];

for(let i = 0; i < alphabets.length; i++) {
    console.log(alphabets[i].name);
}
alphabets.forEach(function (currItem, index, actualArr) {
    console.log(currItem.name);
    if(alphabets[i].name === "A") {
        break;
    }
});
for(let alphabet of alphabets) {
    console.log(alphabet.name);
    if(alphabet.name === "A") {
        break;
    }
}
let oldCar = {
    make: "Toyota",
    model: "Tercel",
    year: "1996"
};
for(let key in oldCar) {
    console.log(`${key} ---> ${oldCar[key]}`);
};

var a = 0;
while(a < 10) {
    console.log("num ", a);
    a++;
};
var numb;
do {
    let input = prompt("Enter a number between 1 and 10: ");
    numb = parseInt(input);
} while (numb < 10);

//(3). Scope
window;
var dummy = 'dummy';
window.dummy; //Vemos que se asigna automáticamente al scope raíz.

//Local/block scope:
function logColor () {
    let color = "blue";
    console.log(color);
}
logColor; //blue
color; //Uncaught ReferenceError

if(true) {
    let color = "pink";
    console.log(color);
}
console.log(color); //Uncaught ReferenceError

var color = "blue";
function returnSkyColor () {
    return color;
}
returnSkyColor(); //"blue"

//Scope pollution
let num = 50;
function logNum() {
    num = 100;
    console.log(num);
}
logNum();
console.log(num); //Imprime dos veces 100, pues es una variable global.

//(4). Hoisting
console.log(hoist);
var hoist = "Hello"; //undefined

var hoist;
console.log(hoist);
hoist = "Hello";

function hoistFun() {
    console.log(message)
    var message = "Hello hoisting";
}
hoistFun();

s();
var s = function() {
    console.log("Definition not hoisted!"); //Uncaught TypeError
}

//(5). Strict mode
"use strict";
x = 3.14; //Uncaught Reference Error, not defined.

delete x;
function x (p1, p1) {};

var variable = 10;
function test() {
    //El hoisting hace que la variable LOCAL se eleve sin valor. Sería algo así:
    // var variable;
    console.log(variable);
    var variable = 20;
    console.log(variable);    
}
test(); //Imprime undefined y 20.
//JS eleva la declaración de la variable pero no asigna el valor. La variable dentro de la función es local y diferente a la variable global.

var variable = 10;
function test() {
    console.log(variable); //Accede a la variable global.
    variable = 20; //Modifica la variable global, dado que no se declara una nueva variable local.
    console.log(variable);    
}
test();//Imprime 10 y 20.

//(6). this
// En un método, al propio objeto.
var person  = {
    firstName: "Jennifer",
    lastName: "Díez",
    id: 1,
    getFullName : function() {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
};
person.getFullName();

// Si está solo, al objeto global.
this; //Window
this === window; //true

// En una función, al objeto global.
function myFunction() {
    console.log(this);
}
myFunction();

// En métodos como call() y apply(), a cualquier objeto.
var person  = {
    firstName: "Jennifer",
    lastName: "Díez",
    id: 1,
    getFullName : function() {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
};
var person1 = {
    firstName: "Salesforce",
    lastName: "Dev"
};
person.getFullName.call(person1);
person.getFullName.call(person1, "A", "B");
person.getFullName.apply(person1, ["A", "B"]);

//(7). Arrow functions
function abc() {
    return 1;
}
var abc = () => 1;
var abc = x => x;
abc();
const abc = (x, y) => x + y;
abc(1, 2);

function abc() {
    return {"name": "Jenni"};
}
var abc2 = () => ({"name": "Jenni"}); //Lo mismo que lo anterior.

var obj = {
    id: 42,
    counter: function counter() {
        console.log(this);
        function abc() {
            console.log(this);
            console.log("My id is " + this.id);
        }
        abc();
    }
}
obj.counter();
//El id es undefined porque this en una función pierde su scope.
//Para solucionarlo, antes de la función debemos darle scope al this de estas dos formas:
var obj = {
    id: 42,
    counter: function counter() {
        console.log(this);
        var that = this;
        function abc() {
            console.log(this);
            console.log("My id is " + that.id);
        }
        abc();
    }
}
obj.counter();

var obj = {
    id: 42,
    counter: function counter() {
        console.log(this);
        function abc() {
            console.log(this);
            console.log("My id is " + this.id);
        }
        abc.bind(this)();
    }
}
obj.counter();

//Si pasamos la función a arrow func también lo solucionamos, aunque no es aconsejable:
var obj = {
    id: 42,
    counter: function counter() {
        console.log(this);
        var abc = () => {
            console.log(this);
            console.log("My id is " + this.id);
        }
        abc();
    }
}
obj.counter();

//(8). Closures
function outer() {
    var counter = 0;
    return function inner() {
        counter += 1;
        return counter;
    }
}
var counter = outer();
counter(); //Devuelve el counter, y cada vez que la ejecutamos, se incrementa en uno.

//(9). Desestructuración de objetos
var employee  = {
    firstName: "Jennifer",
    lastName: "Díez",
    position: "Co-formadora",
    yearHired: 2025
};
// var firstName = employee.firstName;
// var lastName = employee.lastName;
var {firstName, lastName, position, z = "dummy"} = employee;
firstName;
lastName;
z;

var arr = ["A", "B"];
var [first, second] = arr;
first;
second;

//(10). Obj freeze
const newPerson  = {
    name: "Jennifer"
};
newPerson.name = "Anaïs";
newPerson;
Object.freeze(newPerson);
newPerson.name = "Anaïs";
newPerson;
delete newPerson.name; //false

//(11). Date y sus métodos
var d = new Date(1950, 11, 24);
d.getFullYear();
d.getYear();
d.getMonth();
d.getDate();
d.getDay();
d.setYear("2020"); //Imp lo que devuelve.

//(12). Spread
var x = [1, 2, 3, 4];
var y = [...x]; //Nueva copian de la variable x.
x.push(6);
console.log(y); //De esta forma comprobamos que y sigue teniendo el valor original y no se le ha agregado 6.

//Concatenación
var x = [1, 2, 3, 4, 5];
var y = [...x, "6"];

//Pasar elementos de un array a una función como argumento independiente.
function add (a, b, c) {
    return a + b + c;
}
var args = [1, 2, 3, 4, 5];
add(...args);   //Devuelve 6.

//Convertir un string en array.
[..."Jenni"];   //Devuelve un array donde cada elemento es una de las letras del string.

//(13). Rest
 function add(...args) {    //En este caso los ... transforman los parámetros en un array.
    console.log(args);
 }
 add(1); //[1]
 add(1, 2); //[1, 2]

function xyz (x, y, ...z) {
    console.log(x, ' ', y);
    console.log(z);
}
xyz("hey", "hello", "wassup", "gmorning", "hi", "howdy"); //El segundo console log nos devuelve un array con el resto de elementos pasados por parámetro.


//(14). Prototype y __proto__
var o = Object.create(null);
console.log(o); //No tiene propieades porque está inicialidado en null.

var o = {id: 10, name: "Asdf"};
console.log(o); //Nos muestra un objeto __proto__ junto con el resto de claves-valor.
var a = ['Jhon'];
console.log(a); //También tiene __proto__ que a su vez tiene otro dentro.

function Entity (id, name) {
    this.id = id;
    this.name = name;
}
console.dir(Entity);

var user1  = {
    firstName: "Jennifer",
    lastName: "Díez",
    grade: "a",
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var user2 = {
    firstName: "Anais",
    lastName: "VR",
    grade: "b",
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var Person  = function(firstName, lastName, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

var user1 = new Person("Jenn", "D", "Co-Formadora");
console.log(user1);
//Vemos que el objeto tiene __proto__, pero crear esto con una función es redundante. Usamos prototypes:
var Person  = function(firstName, lastName, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
} 

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}
var user1 = new Person("Jenn", "D", "Co-Formadora");
user1.getFullName(); //Vemos que la llamada al método funciona, se encuentra dentro de __proto__.

//(15). Herencia en Objetos
function Animal (name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.eats = function () {
    console.log(this.name + 'está comiendo.');
}

function Dog (name, age, breed) {
    // this.name = name;
    // this.age = age;
    Animal.call(this, name, age);
    this.breed = breed;
    this.logBreed = function () {
        console.log(this.name + ' is a ' + this.breed);
    }
}

var d1 = new Dog("Congui", 12, "Bulldog");
d1.eats(); //TypeError, is not a function.

Dog.prototype = Object.create(Animal.prototype);
var d2 = new Dog("Galleta", 2, "Border Collie");
console.log(d2); //Nos muestra el __proto__: Animal
d2.eats(); //Función funciona.

//(16). Clases y herencia de clases
class Animal {
    constructor (name, age) {
        console.log(name + ' es un animal, ¡y lo acabamos de crear!');
        this.name = name;
        this.age = age;
    }
    eats() {
        console.log(this.name + ' está comiendo.');
    }
}
var animal1 = new Animal("Animal 1", 2);
animal1;
animal1.eats();

class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    logBreed () {
        console.log(this.name + ' is a ' + this.breed);
    }
}

var dog1 = new Dog("Bulldog");

//Para heredar, utilizamos la palabra reservada extends.
class Dog1 extends Animal{
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    logBreed () {
        console.log(this.name + ' is a ' + this.breed);
    }
}
var dog2 = new Dog1("Perrete", "1", "Bulldog");
dog2.eats();

//(17). Decorators. Realizado en jsfiddle con Babel + JSX + No-library (pure JS)
class Greet{
    @readonly
    greeting(){
        return "Holi!";
    }
}
var greet = new Greet();
console.log("1", greet.greeting());

function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

greet.greeting = () => "Yay!";
console.log("2", greet.greeting()); //Vemos que se imprime en orden.

//(18). Modules exporting
//De esta forma, en un archivo utils.js:
export const programmingList = ["JS", "Java"];
export const hello = () => "Hey!";
export const bookDetail = {
    name: "Salesforce",
    author: "Unknown"
}

//También podemos expresarlo así:
const programmingList = ["JS", "Java"];
const hello = () => "Hey!";
const bookDetail = {
    name: "Salesforce",
    author: "Unknown"
}

export {programmingList, hello, bookDetail};

//Y en otro archivo, como index.js, lo importamos:
import {programmingList, hello, bookDetail} from './utils.js';

//O bien así:
import * from './utils.js';

//(20). Modules importing
export default {
    programmingList = ["JS", "Java"],
    hello = () => "Hey!",
    bookDetail = {
        name: "Salesforce",
        author: "Unknown"
    }
}

//En el archivo que importa:
import UTILS from './utils.js';
class App extends Component {
    render() {
        console.log(UTILS.programmingList);
        console.log(UTILS.hello);
        console.log(UTILS.bookDetail);
    }
}