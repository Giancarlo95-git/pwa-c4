//Interface: todo componente debe saber hacer render()

export interface Component { // Cualquier clase que implemente Component debe tener un método render() que devuelva un string.
    render(): string;
}

export class Footer implements Component { // Footer acepta/cumple el contrato de Component
    render(): string{
        return `<footer>Aprender a tu manera - ISIL</footer>`;
    }
}