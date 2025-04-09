//(1). Sincronía y asincronía
let x = 10;
function timesTen(a) {
    return a * 10;
}
let y = timesTen(x);
console.log(y);


function task(message) {
    let n = 10000000000;
    while (n > 0){
        n --;
    }
    console.log(message);
}
console.log('Start script ... ');
task('Download a file.');
console.log('Done!');

//(2). Callbacks
//Síncrono:
let numbers = [1, 2, 4, 7, 3, 5, 6];
let nums = numbers.filter(item => item > 4);    //Función pasada como arg a otra.
console.log(nums);  //[7, 5, 6]

//Asíncrono:
function loadData(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://www.google.es");
    xhr.onload = function() {
        callback(xhr.response);
    }
    xhr.send();
}

loadData(function(result){
    console.log(result);
})
console.log('Data presente.'); //Este mensaje se imprimirá ANTES de que se ejecute la función.

//Asíncrono usando setTimeout
setTimeout(function(a, b) {
    console.log(a);
    console.log(b);
}, 1000, "Salesforce", "Hola");

//(3). Event Loop
console.log('Hi');  //1
setTimeout(function cb1() {
    console.log('cb1'); //3
}, 5000);
console.log('Bye'); //2

//(4). Promesas
var completed = true;
var task = new Promise(function(resolve, reject) {  
    setTimeout(() => {
        if(completed) {
            resolve('Task completada.');
        } else {
            reject('Task rechazada');
        }
    }, 5000);
});
task; //La primera vez devolverá un obj Promise en estado <pending>.
task; //La segunda la devuelve <resolved> con el mensaje establecido.

//(5). promiseObject.then(onFulfilled, onRejected)
function makeTaskPromise(completed) {
    return new Promise(function(resolve, reject) {  
        setTimeout(() => {
            if(completed) {
                resolve('Task completada.');
            } else {
                reject('Task rechazada');
            }
        }, 5000);
    });
};
var task = makeTaskPromise(true);
task.then(success => console.log(success), failure => console.log("Error ===> ", failure))
.catch(error => console.log("Error...", error));

//Finally
task.then(
    success => console.log(success),
    failure => console.log(failure)
).catch(error => console.log(error)
).finally(() => console.log("¡Promesa completada!")); //Se va a ejecutar siempre, independientemente de si la promesa se resuelve.

//(6). Encadenamiento de promesas
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});
p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result1) => {
    console.log(result1);
    return result1 * 3;
});

//Podemos añadir un bloque catch al encadenamiento.
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});
p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result1) => {
    console.log(result1);
    throw new Error("Ops, algo ha salido mal.");
}).catch(error => console.log(error));

//(7). Promise.all() y Promise.race()
var accountCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('account fetch successfully');
        resolve(["Saving", "Current"]);
    }, 1000);
});

var countryCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('country list fetch successfully');
        resolve(["INDIA", "AUSTRALIA"]);
        //Vamos a forzar un error para ver cómo se detiene la ejecución.
        //reject("¡Eeeerror!");
    },2000);
});
var currencyList = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('currencyList list fetch successfully');
        resolve(["INR", "USD", "AUD"]);
    }, 3000);
});

Promise.all([accountCall, countryCall, currencyList])
.then(results => {console.log("PROMESAS OK: ", results)
}).catch(error => {
    console.log(error);
    console.log("PROMESAS NOT OK");
});

var job1 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Job1 ready' ));
var job2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Job2 ready' ));  //Para forzar error, cambiamos resolve por reject.
var job3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Job3 ready' ));

Promise.race([job1, job2, job3]).then(result=>console.log("Resultado: ", result)).catch(error => console.log("¡Error!", error));

//(8). Async/await
async function abc(){
    return "hello"
}
abc(); //Vemos que devuelve una promesa.
abc().then(result => console.log(result)); //Devuelve el resultado de la promesa.

async function abc(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> resolve("Hello!"), 1000)
    })
    console.log("Start")
    let greeting = await promise;
    console.log("End")
};
abc();

//(9). Job Queue
//La job queue hace que el resultado de esto sea: start, end, promise 1, promise 2 y timeout.
console.log('Start');

setTimeout(function() {
    console.log('Timeout');
}, 0);

var promise = new Promise(function(resolve, reject) {
    resolve();
});

promise.then(function(resolve) {
    console.log('Promise 1');
}).then(function(resolve) {
    console.log('Promise 2');
});

console.log('End');

//(10). Generator function
function* generate() {
    console.log("Invoked 1st time");
    yield 1;
    console.log("Invoked 2nd time");
    yield 2;
}
let gen = generate();
gen.next(); //La primera vez devolverá el primer csl.log y un objeto con el valor y done: false, la segunda vez el segundo
// y así sucesivamente hasta llegar al final donde devolverá un value: undefined y done: true.