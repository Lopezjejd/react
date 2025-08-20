
import './App.css'

import { ProductItem } from './components/Product'
import { useCart } from './context/CartContext'
import { ActionType } from './types/types'
import { Routes, Route } from 'react-router-dom'
function App() {
const {products,cart,filterByPrice}= useCart()
     const totalPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity) , 0)
  
  return (
    <>


      <h1>Pc Gamer Shop</h1>
      <p>For here you will find the best gaming pcs</p>
      <ul className='product-list'>
        {products.map(product => (
          <ProductItem product={product} type={ActionType.add} key={product.id}  />
        ))}
      </ul>
      <h2>Shopping cart</h2>
      <span>cantidad de productos {cart.length}

      </span>
      <span> precio total{totalPrice}</span>
       <button onClick={filterByPrice}>filtrar por precio</button>
      <ul className='product-list'>
       
        {cart.map(product => (
          <ProductItem product={product} type={ActionType.remove} key={product.id}/>
        ))}
      </ul>
    </>
  )
}

export default App
