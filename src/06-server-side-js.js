//(1). Node.js como servidor web.
var http = require("http"); //Llamada a la librería http.
var server = http.createServer((function(request, response) {	//Creamos el servidor.
	response.writeHead(200,	//Establecemos el contenido del header.
		{ "Content-Type": "text/plain" });
	response.end("Hello World!"); //Le mandamos un string a la respuesta.
}));

server.listen(8080); //Hacemos que el servidor escuche por el puerto 8080.

//(2). Eventos con Node.js
var events = require("events");
var eventEmitter = new events.eventEmitter();

var myEventHandler = function () {	//Creamos el event handler.
	console.log("Yay!");
}
eventEmitter.on('greet', myEventHandler); //Lo asignamos a un evento.
eventEmitter.emit('greet');	//Y lo lanzamos de esta manera + ejecutando el archivo.