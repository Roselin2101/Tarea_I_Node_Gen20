//1. Importamos el modelo
const Server = require('./models/server')
// 2. Instanciamos el servidor o la clase
const server = new Server()
//3. Pongo al servidor a escuchar
server.listen()