//(1). Elementos de selección.
let elemId = document.getElementById("hello");
console.log(elemId);

let elemCls = document.getElementsByClassName("hello");
console.log(elemCls);

let elemTag = document.getElementsByTagName("div");
console.log(elemTag);

let byId = document.querySelector("#hello");
let byClass = document.querySelector(".hi"); //Nos va a devolver sólo el primer elemento que encuentre.
console.log(byClass.innerHTML);
let byClassAll = document.querySelectorAll(".hi"); //Si queremos que nos devuelva todos los elementos.
console.log(byClassAll.innerHTML);

//(2). Moverse entre elementos.
let bodyChild = document.querySelector("body").children; //Devuelve todos los hijos.
let bodyFirstChild = document.querySelector("body").firstElementChild;
console.log(bodyTag);

//(3). Manipulación de elementos.
let manipulation = document.querySelector("#hello").innerHTML = "<div>Nuevo child<div>"; //Añadimos etiqueta div, como un nuevo child.
let secondManipulation = document.querySelector("#hello").innerText = "<div>Nuevo child<div>"; //Añade el texto tal cual, no renderiza nueva etiqueta.
console.log(manipulation);

//(4). Manipulación de atributos.
let elem = document.querySelector("#hello").getAttribute("variant", "Success"); //Devuelve el interior del atributo. Si no lo encuentra devuelve null.
console.log(elem);

//(5). Manipulación de estilos.
let elemStyle = document.querySelector("#hello").style.fontSize="40px";
// let elemStyle = document.querySelector("#hello").style.visibility="hidden";
// let elemStyle = document.querySelector("#hello").style.display="none";
let elemClassList = document.querySelector("#hello").classList;
console.log(elemClassList);
elemClassList.add("show"); //Añade una nueva clase al elemento.

//(6). HTML event handler mediante atributo
function showAlert() {
    alert("Hey guys!");
}

//(7). HTML event handler mediante propiedad
let btn = document.querySelector("#btn");
btn.onclick = function () {
    alert("Hey guys!");
}

//(8). Event Listener: add y remove
function showAlert() {
    alert("Hey guys!");
}
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', showAlert);

let removeBtn = document.querySelector('#btn-remove');
removeBtn.addEventListener('click', function() {
    btn.removeEventListener('click', showAlert);
})

//(9). Eventos de carga y descarga de la página (Load y Unload)
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado.');
});

window.addEventListener('load', (event) => {
    console.log('La página está completamente cargada.');
});

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});

//(10). Flujo de eventos
//Bubbling: al hacer click en el botón vemos que se propaga de forma ascendente, de manera que nos saltan todos los alerts.
let btn = document.querySelector("#btn");
btn.addEventListener ('click', function () {
    alert("Button clicked!");
});
let divWrapper = document.querySelector('#div_wrapper');
divWrapper.addEventListener ('click', function () {
    alert("Wrapped clicked!");
});
let body = document.querySelector('#body');
body.addEventListener ('click', function () {
    alert("Body clicked!");
});

//Capturing: al hacer click en el botón vemos que se propaga de forma descendente.
let btn = document.querySelector("#btn");
btn.addEventListener ('click', function () {
    alert("Button clicked!");
});
let divWrapper = document.querySelector('#div_wrapper');
divWrapper.addEventListener ('click', function () {
    alert("Wrapped clicked!");
});
let body = document.querySelector('#body');
body.addEventListener ('click', function () {
    alert("Body clicked!");
}, true);   //Lo definimos añadiendo esto al addEventListener.

//(11). Custom Event
let btn = document.querySelector("#btn");
let msg = document.querySelector("#msg");
btn.addEventListener("click", function (e) {
    let helloEvent = new CustomEvent("showMsg", {   //Creamos el custom event.
        detail: "Hello msg"
    })
    btn.dispatchEvent(helloEvent); //Lo enlazamos con el elemento (trigger).
});
btn.addEventListener("showMsg", function () {
    console.log(e.detail);
    msg.innerText = e.detail;
});

//(12). Objeto Event
let btn = document.querySelector("#btn");
let body = document.querySelector('#body');
btn.addEventListener("click", function (event) {
    console.log(event); //Nos muestra todo el evento con sus props.
    event.stopPropagation();
});
body.addEventListener ('click', function (event) {
    console.log("currentTarget", event.currentTarget);  //Devuelve la etiqueta body.
    console.log("target", event.target); //Devuelve la etiqueta button.
});

let link = document.querySelector('#link');
link.addEventListener("click", function (event) {
    console.log("Clicked...");
    event.preventDefault(); //No nos redirige a la web del href.
});

//(13). Window API
window.alert("¡Hola!");

let result = confirm('¿Estás segurx de que deseas eliminarlo?');
let message = result ? 'Has dicho que sí' : 'Has dicho que no';
console.log(message);

let lang = prompt('Tu nombre:');
let feedback = lang.toLocaleLowerCase() === 'Jenni' ? 'Sí' : 'No';
console.log(feedback);

function showSTAlert() {
    setTimeout(alert, 3000, 'SetTimeout Demo');
}

var timeoutId;
function showSTAlert() {
    timeoutId = setTimeout(alert, 3000, 'SetTimeout Demo');
}

function cancelAlert() {
    clearTimeout(timeoutId);
    console.log('Cancelado...');
}

function toogleColor() {
    let text = document.querySelector('#text');
    text.style.color = text.style.color === 'red' ? 'blue' : 'red';
}
function start() {
    setInterval(toggleColor, 1000);
}
function stop() {
    clearInterval(intervalId);
}

localStorage.setItem("Code", "123");
var code = localStorage.getItem("Code");
console.log(code);
localStorage.removeItem("Code");