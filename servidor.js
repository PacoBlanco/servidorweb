var http = require("http");

var servidorWeb = http.createServer(function (peticion, respuesta){
   respuesta.end("Hola Introducción NPM.");
});

servidorWeb.listen(3000, function(){
   console.log("Tu servidor está listo en el puerto " + this.address().port);
});
