const express = require('express');
const app = express();
const fs = require('fs');

// Para procesar solicitudes en formato json
app.use(express.json());

// Mostrar
app.get('/productos', (req, res) => {
	const data = fs.readFileSync('./productos.json', 'utf-8');
	const productos = JSON.parse(data);
	res.json(productos);
});

// insertar
app.post('/productos', (req, res) => {
	const nuevoProducto = req.body;
	const data = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'));
	data.push(nuevoProducto);
	fs.writeFileSync('./productos.json', JSON.stringify(data, null, 2));
res.status(201).send('Producto correctamente agregado');
});

// actualizar
app.put('/productos/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const nuevoProducto = req.body;
	let data = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'));
	data = data.map(producto => producto.id === id ? { ...producto, ...nuevoProducto} : producto);
	fs.writeFileSync('./productos.json', JSON.stringify(data, null, 2));
	res.send('Producto actualizado correctamente');
});

// eliminiar
app.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let data = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'));
    const productosFiltrados = data.filter(producto => producto.id !== id);
    if (productosFiltrados.length === data.length) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    fs.writeFileSync('./productos.json', JSON.stringify(productosFiltrados, null, 2));
    res.send('Producto eliminado correctamente');
});

app.listen(3001, () => {
	console.log('Servidor escuchando en el puerto 3001 http://localhost:3001 ');
});