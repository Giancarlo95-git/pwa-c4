const express = require('express');
const app = express();
const usuariosRouter = require('./routes/usuarios');

app.use('/usuarios', usuariosRouter);

app.listen(3002, () => {
	console.log('Servidor escuchando en el puerto 3002 http://localhost:3002');
})