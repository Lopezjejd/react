
import { useCart } from '../context/CartContext'
import { ProductItem } from '../components/Product'
import { ActionType } from '../types/types'



const Car = () => {
    const useCartContext = useCart()
const {cart,filterByPrice,totalPrice}= useCartContext
const precioTotal= totalPrice()
 return (
<div>
              <h2>Shopping cart</h2>
      <span>cantidad de productos {cart.length}

      </span>
      <span> precio total{precioTotal}</span>
       <button onClick={filterByPrice}>filtrar por precio</button>
      <ul className='product-list'>
       
        {cart.map(product => (
          <ProductItem product={product} type={ActionType.remove} key={product.id}/>
        ))}
      </ul>
</div>
 )
}
export default  Car