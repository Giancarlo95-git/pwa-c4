import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";

const app = document.querySelector<HTMLElement>('#app'); // Busca en el HTML un elemento que tenga id="app"

if(!app){
    throw new Error('No se encontró el elemento con id "app"'); // Comprueba que #app exista. Si no existe, lanza un error y detiene la ejecución.
}

const header = new Header('Programación web avanzada    '); // Crea un objeto Header y le pasa el título
const button = new Button('Guardar');
const footer = new Footer();

// app.innerHTML = header.render(); -> <h1>Programación web avanzada</h1> -> coloca ese HTML dentro de #app

app.innerHTML = `
    ${header.render()}
    ${button.render()}
    ${footer.render()}
`;

document.querySelector("#saveBtn")?.addEventListener('click', () => button.onClick());
// Busca el botón saveBtn. Si existe, cuando el usuario haga clic, ejecuta el método onClick() del objeto button.