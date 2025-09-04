
import { useCart } from '../context/CartContext'
import { ProductItem } from '../components/Product'
import { ActionType } from '../types/types'
import { useEffect } from 'react'


const Car = () => {
    const useCartContext = useCart()
const {cart,filterByPrice,totalPrice,setCart}= useCartContext

useEffect(()=>{
  if(cart.length===0){
    return
  }
  localStorage.setItem('cart',JSON.stringify(cart)) 
},[cart]);
//cargamos el carrito del localstorage
useEffect(() => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart !== null) {
    const parsed = JSON.parse(storedCart);
    if (Array.isArray(parsed) && parsed.length > 0) {
      setCart(parsed);
    }
  }
}, []);
 return (
<div>
              <h2 className='text-3xl mt-4 ml-6'>Shopping cart</h2>
        <div className='flex gap-2 mt-4 mb-4 align-baseline jus\ '>
        <span className='px-2 py-1  bg-cyan-700  text-amber-50'
         >cantidad de productos {cart.length}

           </span>
           <span className='px-2 py-1  bg-cyan-700  text-amber-50'
           > precio total {totalPrice}</span>
            <button className='px-2 py-1 bg-cyan-700 cursor-pointer text-amber-50'
             onClick={filterByPrice}>filtrar por precio</button>
       </div>
      <ul className='m-auto grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center p-4'>
       
        {cart.map(product => (
          <ProductItem product={product} type={ActionType.remove} key={product.id}/>
        ))}
      </ul>
</div>
 )
}
export default  Car