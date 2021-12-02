import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import styles from './estilos'
import { Contenedor, Button, ListaArticulos } from './styles'

export const Carro = ({
    cantidad,
    productos,
    eliminarProducto
}) => {
    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto
    
    ////funcion para eliminar el producto
    const eliminar = (x) => {
        eliminarProducto(x)
    }

    return (
        <Contenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Button onClick={handleMostrarCarro} >
                Carro
            </Button>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos>
                        <ul style={styles.ul}>
                            {
                                productos.map(x => {
                                    return (
                                        <li
                                            style={styles.li}
                                            key={x.id}
                                        >
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span>
                                                <button
                                                    style={styles.deleteButton}
                                                    onClick={()=> eliminar(x)}
                                                    >
                                                        X
                                                </button> {x.nombre}
                                            </span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </li>
                                    )
                                })
                            }
                            <li style={styles.li}>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </li>
                            <li style={styles.li}>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </li>
                            <li style={styles.li}>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </li>
                        </ul>
                    </ListaArticulos>
            }
        </Contenedor>

    )
}