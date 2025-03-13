//(1). Testing
function doubleNum (num) {
    return num * num;
}

let num = 2; //No ocurre nada, pues es true.
let num = 3; //Se imprime el mensaje de error por consola.
console.assert(doubleNum(num) % 2 === 0, "Not an even number!" );
console.assert(doubleNum(num) % 2 === 0, {errorMsg: "Not an even number", number: num} ); //De esta forma le pasamos un objeto.
console.assert(doubleNum(num) % 2 === 0, "%s Not an even number", num);

async function serviceCall (status) {
    return status ? "SUCCESS" : "ERROR";
}
serviceCall(); //Devuelve la promesa con "ERROR".
await serviceCall(); //Devuelve "ERROR".
console.assert(await serviceCall(true) === 'ERROR', "Testing failed"); //Devuelve el mensaje con Assertion.
console.assert(await serviceCall(false) === 'ERROR', "Testing failed"); //No devuelve nada.


//Ejemplo de tests con Jest.
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

module.export = {sum, mul, sub, div};

const {sum, mul, sub, div} = require('./math');
test('Adding 1 + 1 equals 2'), () => {
    expect(sum(1, 1)).toBe(2);
}
test('Multiplying 1 * 1 equals 1'), () => {
    expect(mul(1, 1)).toBe(1);
}
test('Substracting 1 - 1 equals 0'), () => {
    expect(sub(1, 1)).toBe(0);
}
test('Dividing 1 / 1 equals 1'), () => {
    expect(div(1, 1)).toBe(1);
}