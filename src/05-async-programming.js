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
task.then(success => console.log(success), failure => console.log(failure));