let express = require('express'); //Importando funcion express de libreria express
let app = express();

app.get('/', function (request, response) {
   response.send('Hola');
})

app.get('/deboca', function (request, response) {
    response.send('Soy de Boca');
})

let server = app.listen(8081, function () {
   let host = server.address().address
   let port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})