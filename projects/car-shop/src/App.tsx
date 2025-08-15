
import './App.css'

import { ProductItem } from './components/Product'
import { useProducts } from './hooks/useProducts'
import { ActionType } from './types/types'
function App() {
const { products, cart, addToCart, removeFromCart,filterByPrice } = useProducts()
     const totalPrice = cart.reduce((acc, product) => acc + product.price, 0)
  
  return (
    <>
      <h1>Pc Gamer Shop</h1>
      <p>For here you will find the best gaming pcs</p>
      <ul className='product-list'>
        {products.map(product => (
          <ProductItem key={product.id} product={product} buttonAct={addToCart} type={ActionType.add} />
        ))}
      </ul>
      <h2>Shopping cart</h2>
      <span>cantidad de productos {cart.length}

      </span>
      <span>precio total{totalPrice}</span>
       <button onClick={filterByPrice}>filtrar por precio</button>
      <ul className='product-list'>
       
        {cart.map(product => (
          <ProductItem key={product.id} product={product} buttonAct={removeFromCart} type={ActionType.remove} />
        ))}
      </ul>
    </>
  )
}

export default App
