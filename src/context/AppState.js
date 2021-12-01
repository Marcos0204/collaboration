import { useState, useEffect } from 'react'
import AppContext from './AppContext'


const stateInicial= [
    {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
    {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
    {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
    {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
    {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'}
]

const AppState = ({children}) => {
    const [articulos, guardarArticulo] = useState([])

    useEffect(()=> {
        guardarArticulo(stateInicial)
        // eslint-disable-next-line
    }, [])
    
    
    const [ carrito, guardarCarrito ] = useState([])
    ///agregando al carrito
    const agregarAlCarro = (producto) => {
        // 1- Verificar si el producto clickeado ya està en el carrito
        if (carrito.find(x => x.id === producto.id)) {
          // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
          const carritoCopia = carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
          guardarCarrito(carritoCopia)
          
          return
        }
    
        guardarCarrito([...carrito, {...producto, cantidad: 1}])
      }
    
    ///eliminar compra
    const eliminarProducto = producto => {
        const nuevaLista = carrito.filter(item => item.id !== producto.id)
        guardarCarrito(nuevaLista)
    }

    return (
        <AppContext.Provider
            value={{
                articulos: articulos,
                carrito: carrito,
                agregarAlCarro,
                eliminarProducto
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppState
