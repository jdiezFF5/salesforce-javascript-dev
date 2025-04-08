//(1). Errores de sintaxis
var x = 2;
var y = 3;
console.log(x + y;  //Cierre de paréntesis. Uncaught Syntax Error en la consola del nav.

//(2). Errores en runtime
console.log('start');
window.callSuperman(); 
console.log('end');
//Runtime error, la sintaxis es correcta pero en tiempo de ejecución 
// no encuentra la función invocada, y por eso salta el error. Uncaught TypeError.

//(3). Errores de lógica
console.log('start');
let value = "{Jenni}" //JSON inválido vs {"name": "Jenni"}.
JSON.parse(value); //Error de lógica (pese a que en consola muestra SyntaxError: unexpected token in JSON).
console.log('end');

//(4). try - catch - finally y objeto Error
try {
    //Código.
    console.log("Soy el bloque try");
    // let value = "{Jenni}";
    // JSON.parse(value);
    // console.log("Ops...");
} catch (error) {
    //Error handling.
    console.log("Soy el bloque catch");
    console.log(error.message);
} finally {
    //Siempre se ejecuta, independientemente de que se dé un error o no.
    //Este bloque es opcional.
    console.log("Soy el bloque finally");
}

//Error no capturado en bloque asíncrono:
try {
    setTimeout(function () {
        abd; //Error al no estar definido, pero no es capturado por el bloque catch.
    }, 1000);
    console.log("Soy el bloque try");
} catch (error) {
    console.log("Soy el bloque catch");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("Soy el bloque fuera de try-catch");

//Para capturar el error correctamente en código asíncrono, añadimos un try-catch dentro de la función:
setTimeout(function () {
    try {
        abd; //Error al no estar definido.
        console.log("Soy el bloque try");
    } catch (error) {
        console.log("Soy el bloque catch");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    }
}, 1000);
console.log("Soy el bloque fuera de try-catch");

//(5). throw
let name = "Jenni";
try {
    if (name === "Jenni") {
        throw "Ops, algo ha ocurrido...";
    } else {
        console.log("Todo ok.");
    }
} catch (error) {
    console.log(error);    //Devuelve mensaje de throw, al igual que error.message
    console.log(error.name); //Devuelve undefined porque no tenemos un objeto Error. Podemos solventarlo haciendo throw new Error("Ops, algo ha ocurrido...")
}

//(6). Console
console.warn('Cuidado, elemento deprecado.');
console.error('¡Error detectado!');
console.info('Mensaje pacífico de información, todo está en orden.');

//(7). Cadenas de sustitución en console
var x = [{
    name: "Jennifer",
    language: "JS",    
    },
    {
        name: "Anais",
        language: "Python",    
    }
];
console.log("¡Hola %s, me has llamado %d veces y el objeto es %o",
        "Cris", 10, x);

//(8). console.table
console.table([{name: "Jennifer", language: "JS"}, {name: "Anais", language: "Python"}]);

//(9). console.time
function acllApi() {
    console.time('API TIMMER'); //API TIMMER (el label) es opcional.
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            console.timeEnd('API TIMMER');
            console.table(json);
        })
}
acllApi();

//(10). console.group
var x = [{
    name: "Jennifer",
    language: "JS",    
    },
    {
        name: "Anais",
        language: "Python",    
    }
];

x.forEach(item => {
    console.group(item.name);
    console.log(`A ${item.name} le gusta programar en ${item.language}`);
    console.log(`${item.language} es un lenguaje de programación`);
    console.groupEnd(item.name);
})