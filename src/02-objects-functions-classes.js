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

https://youtu.be/yZWkcasLUsU?feature=shared&t=894