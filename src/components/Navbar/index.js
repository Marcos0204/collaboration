import { useContext } from 'react'
import { Carro } from '../Carro'
import styles from './estilos'
import AppContext from "../../context/AppContext";

export const Navbar = ({ //cantidad,
                        //productos
                            }) => {

    const { carrito, eliminarProducto } = useContext(AppContext)
    //console.log(carrito)
    let cantidad = carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
    return (
        <nav style={styles.nav}>
            <p>Logo</p>
            <Carro cantidad={cantidad} productos={carrito} eliminarProducto={eliminarProducto} />
        </nav>
    )
}