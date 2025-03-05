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

