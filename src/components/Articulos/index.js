import { useContext } from 'react'
import { Articulo } from "../Articulo";
import styles from './estilos'
import AppContext from "../../context/AppContext";

export const Articulos = () => {

    const { articulos } = useContext(AppContext)

    return (
        <div style={styles.div}>
            {
                articulos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo
                        key={prod.id}
                        prod={prod}
                    />
                )
            }
        </div>
    )
}