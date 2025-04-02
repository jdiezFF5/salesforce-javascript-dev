//(1). Variables
var myName;
myName;   //Undefined
var name = "JavaScript";
console.log(name);; //"JavaScript"
var Name = "JS";
console.log(Name);; //"JS"

var x = true;   //boolean
var x = 10; //integer

var hello99_$ = "hey";
var 5 = "hey"; //Uncaught SyntaxError
var _greeting;

//(2). Data types
var num = 123;
var num = 34.787;
var num = -123;
var num = -0;
var num = 0;
var num = Infinity;
var num = -Infinity;
var num = NaN;

//(3). BigInt
var bigNumber = 9007199254740991n;
var anotherBigNumber = BigInt(9007199254740991);

//(4). Undefined
var testName; //Undefined
var testName = undefined;
var testName = null; //Se recomienda utilizar undefined antes que null.

//(5). Object
//Declaración literal
var x = {};
x.name = "Jenni";
x["age"] = 31;

var detail = {
    name: "Jennifer",
    age: "31",
    isAvailable: true,
    getName: function() {
        return "Hello Jenni"
    }
};

//Constructor
var x = new Object();
x.name = "Jennifer";

//Método
var obj = {
    name: "Jennifer"
}
var newObj = Object.create(obj); //En este punto, x en consola devuelve un objeto ({}) vacío.
//Porque es una referencia al otro obj, pero podemos navegar por sus props.
newObj.name;

var obj = {
    "full name": "Jennifer"
}
obj.full name //No podemos acceder de esta forma al tener un espacio de por medio.
obj["full name"]; //De esta forma sí.
Object.keys(obj);

obj.name = "Test";
delete obj.name;    //Retorna boolean.

//(6). Symbol
var symbol = Symbol();
var symbolWithDescripcion = Symbol("Description");

//Dado que todos los símbolos son únicos, esto retorna false:
var foo = Symbol("asdf");
var bar = Symbol("asdf");
foo === bar;

var user = {};
var email = Symbol();
user.name = "Jenn";
user[email] = "jenni@ff5.org";
user; //Aparece Symbol en las props.
Object.keys(user); //No aparece Symbol en las props.
Object.getOwnPropertySymbols(user); //De esta forma veríamos las props que tienen Symbol como clave.
Reflect.ownKeys(user); //De esta otra veríamos tanto las claves string como las Symbol.

//(7). Conversión de tipos
typeof 23; //"number"
typeof ""; //"string"
typeof "true"; //"string"
typeof true; //"boolean"
var x;
typeof x; //"Undefined"
typeof Symbol(); //"Symbol"
typeof null; //"object", ¡caso muy importante!
typeof {}; //"object"

//Ejemplos de preguntas del examen...
typeof (typeof 1);  //"string". Typeof 1 devuelve "number", que es un string.
typeof !!(-1); //"boolean". !(-1) devuelve false, y su negación es true, en cualquier caso es boolean.
typeof function(){} //"function".
//Las funciones son un tipo especial de objeto, pero en JS las funciones son objetos de primera clase, lo que significa
//que puieden asignarse a variables, pasarse como argumentos, retornarse desde otras funciones y tener propiedades y objetos como obj normales.
//Sin embargo al hacer el typeof devuelve "function" porque se consideran un tipo de obj con un propósito específico, que es ejecutar código.

typeof Date(); //'string' porque devuelve un string con la fecha actual: "Tue Apr 02 2025 10:15:00 GMT+0000 (Coordinated Universal Time)"
typeof new Date();  //"object". En este caso sí es un obj, como habíamos visto.

//(8). Conversión de tipos
String(23); //"23"
String(undefined); //"undefined"
Number(23); //23
//¡Casos importantes!
Number(undefined); //NaN
Number(null); //0
Number("hello"); //NaN
Number(true); //1
Number(false); //0
Number([]); //0
Number(["22"]); //22
Number(["22", "23"]); //NaN

//Conversión implícita. Imp examen.
"Hello" + "World"; //"HelloWorld"
100+"Hello"; //'100Hello'

100 + null + 20 + "world"; //"120world". 100 + 0(null) + 20, y se concatena con el string.
100 + 20 + undefined + "world"; //"NaNworld". Porque Number(undefined) devuelve NaN.
var x = {};
x + "hey"; //"[object Object]hey"
//Ejemplos de clase.
undefined + "100" + 20 + "world"; //'undefined10020world'
undefined + "100" + 20 + 5 + "world"; //undefined100205world'
"home" + undefined + "100" + 20 + 5 + "world"; //'homeundefined100205world'
8 + 2 + "home" + "100" + 20 + 5 + "world"; //'10home100205world'
8 + 2 + "home" + "100" + (20 + 5) + "world"; //'10home10025world' ¡Importante! Hace la suma de 20 + 5.
8 + 2 + "home" + "100" + 20 * 5 + "world"; //'10home100100world' ¡Importante! Hace la multiplicación de 20 + 5.
8 + 2 + "home" + "100" + 20 / 5 + "world"; //'10home1004world' ¡Importante! Hace la división de 20 + 5.
8 + 2 + "home" + "100" + 20 / "5" + "world"; //'10home1004world' ¡Importante! Hace la división convirtiendo el valor del string "5" en Number.
8 + 2 + "home" + "100" + 20 / "asdf" + "world"; //'10home100NaNworld'
8 + 2 + "home" + "100" + 20 / "five" + "world"; //'10home100NaNworld'
8 + 2 + "home" + "100" + (20 + "1") + "world"; //'10home100201world'

//(9). Valores falsy
Boolean(2); //true
Boolean("2"); //true
Boolean(0); //false
Boolean(0n); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(false); //false

//(10). Comparaciones
100 == '100'; //true
100 === '100'; //false, porque compara el tipo.
true == "true"; //false
-0 === 0; //true
NaN === NaN; //false. ¡Imp! NaN es el único valor que no es igual ni siquiera en sí mismo.
//NaN representa un valor numérico inválido, y cualquier comparación con NaN siempre debe ser falsa.
Object.is(-0, 0); //false
Object.is(NaN, NaN); //true

//(11). Operadores
"hello" > "Hello"; //true, porque JS coge el primer valor de cada uno y compara su código ASCII.
//Podemos saberlo mediante "h".charCodeAt(), que devuelve 104 frente a 74 de "H".
var x = [] || "hey";
var x = 0 || "hey"; //En este caso contiene el segundo valor.
var x = 0 && "Jenn"; //Aquí sí tiene valor 0.
!0; //true
!Boolean(0); //true
!"hey"; //false

var name = "Jenni";
var isAvailable = name === "Jenni" ? "Yay!" : "Nop...";

//(12). Variables: var, let y const
console.log(n);
var n = "10";
//Devuelve undefined debido al hoisting.
/* Consiste en que las variables son declaradas al principio del código, y por tanto internamente Js haría algo así:
    var n;
    console.log(n);
    n = "10";
 De ahí que no genere ningún error.
*/

if(true) {
    var name = "hello";
}
console.log(name); //Se imprime.

if(true) {
    let nameLet = "hello";
}
console.log(nameLet); //No se imprime. Uncaught Reference Error.

const name = "First name";
const name = "Second name"; //Uncaught SyntaxError, sucede lo mismo con let.

const userDetail = {
    name: "Jennifer"
}
userDetail.name = "JavaScript"; //En este caso no lanza error debido a que estamos actualizando la referencia.

let texto = "  ¡Hola Mundo!  ";
texto.toLowerCase();  // "  ¡hola mundo!  "
texto.toUpperCase();  // "  ¡HOLA MUNDO!  "
texto.trim();         // "¡Hola Mundo!"
texto.trimStart();    // "¡Hola Mundo!  "
texto.trimEnd();      // "  ¡Hola Mundo!"
texto.substr(3, 4);   // "Hola"
texto.substring(3, 7); // "Hola"
texto.replace("Mundo", "JavaScript"); // "  ¡Hola JavaScript!  "
texto.indexOf("Mundo");  // 7
texto.includes("Hola");  // true
texto.split(" ");  // ["", "", "¡Hola", "Mundo!", "", ""]