import { useContext } from 'react'
import styles from './estilos'
import AppContext from "../../context/AppContext";
export const Button = ({children, prod}) => {
    
    ///////////utilizamos el context para extraer la funcion
    const { agregarAlCarro } = useContext(AppContext)
    const clickAgregar = (prod) =>{
        agregarAlCarro(prod)
    }
    return (
        <button onClick={() => clickAgregar(prod)} style={styles.button}>{children}</button>
    )
}
