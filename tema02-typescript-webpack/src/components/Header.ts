// Para renderizar/pintar un pie de página - define cómo se crea y se genera el encabezado

export class Header{
    constructor(private title: string){}

    render(): string{
        return `<h1>${this.title}</h1>`;
    }
}

// export class Header → crea una clase Header y permite importarla desde otros archivos.
// constructor(private title: string) → recibe un title y lo guarda automáticamente como propiedad privada.
// render(): string → método que devuelve un texto (string).
// `<h1>${this.title}</h1>` → genera HTML usando el título.