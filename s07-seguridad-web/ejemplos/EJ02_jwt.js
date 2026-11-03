require('dotenv').config();
const jwt = require('jsonwebtoken');
const secreto = process.env.JWT_SECRET;
if(!secreto || secreto.length < 48) throw new Error("Configurar JWT_SECRET con mínimo 48 caracteres");

const token = jwt.sign({id: 10, rol: 'usuario'}, secreto, {expiresIn: '1h', algorithm: 'HS256'});

const usuario = jwt.verify(token, secreto, {algorithms: ['HS256']});
console.log('Token valido: ', usuario.id, usuario.rol);

try{
	jwt.verify(`${token}alterado`, secreto, {algorithms: ['HS256']});
}catch(e){
	console.error("Token inválido");
}