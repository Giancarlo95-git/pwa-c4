const product = {
    id: 101,
    nombre: "Laptop",
    precio: 2500,
    detalle: {
        marca: "Dell",
        garantia: "1 año"
    }
}

const {nombre, precio, detalle: {marca}} = product;

console.log(`Producto: ${nombre}`);
console.log(`Precio: ${precio}`);
console.log(`Marca: ${marca}`);