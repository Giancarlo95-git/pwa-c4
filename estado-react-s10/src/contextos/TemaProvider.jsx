import { useState, useEffect } from "react";
import { TemaContexto } from "./TemaConexto";

export function TemaProvider({ children }) {
    const [temaOscuro, setTemaOscuro] = useState(false);

    const alternarTema = () => setTemaOscuro(actual => !actual);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-tema",
            temaOscuro ? "oscuro" : "claro"
        );
    }, [temaOscuro]);

    return (
        <TemaContexto.Provider value={{ temaOscuro, alternarTema }}>
            {children}
        </TemaContexto.Provider>
    );
}