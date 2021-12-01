import { useContext } from 'react'
import styles from './estilos'
import AppContext from "../../context/AppContext";
export const Button = ({children,
                        //agregarAlCarro,
                        prod}) => {
    const { addToCar } = useContext(AppContext)
    const clickAgregar = (prod) =>{
        //agregarAlCarro(prod)
        addToCar(prod)
    }
    return (
        <button onClick={() => clickAgregar(prod)} style={styles.button}>{children}</button>
    )
}
