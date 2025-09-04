import type { Product } from '../types/types';
import { useState } from 'react';
import { ActionType } from '../types/types';
import { useCart } from '../context/CartContext'; // 👈 usamos el context
import { useNavigate } from 'react-router-dom';


interface ProductItemProps {
  product: Product
  type: typeof ActionType[keyof typeof ActionType]
}

export function ProductItem({ product, type }: ProductItemProps) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  // 👇 funciones vienen del context, no de props
  const { addToCart, removeFromCart, IncreaseAmount, DecreaseAmount } = useCart();

  const handleClick = () => {
    if (type === ActionType.add) {
      addToCart(product, quantity);
    } else {
      removeFromCart(product);
    }
  };

  return (
    <li className='flex flex-col items-center w-xs bg-gray-50 border-2 border-gray-200 
       rounded-lg p-4 shadow-md group '>
    <div className="w-full h-1/3 overflow-hidden">
        <img src={product.image} alt={product.name} className='group-hover:scale-105 transition-all' />
      </div>
      <h2 className='text-xl font-medium'>{product.name}<span className='text-sm font-normal'>   ${product.price}</span></h2>

    
      <div className='flex content-center items-baseline justify-center mb-2'>
          <span className='mr-2 border-1 border-cyan-700 px-1.5  rounded'>
            {type === ActionType.add ? quantity.toString() : product.quantity.toString()}
            </span>
        <button className='mr-2 px-1 h-5 bg-cyan-500 text-white
        cursor-pointer rounded flex items-center justify-center'
          disabled={type === ActionType.add ? quantity >= 10 : product.quantity >= 10}
          onClick={() => {
            if (type === ActionType.add) {
              setQuantity(quantity + 1);
            } else {
              IncreaseAmount(product);
            }
          }}
        >+</button>

        <button  className='mr-2 px-1.5 h-5 bg-cyan-700 cursor-pointer
         text-white rounded flex items-center justify-center'
          disabled={type === ActionType.add ? quantity <= 1 : product.quantity <= 1}
          onClick={() => {
            if (type === ActionType.add) {
              setQuantity(quantity - 1);
            } else {
              DecreaseAmount(product);
            }
          }}
        >-</button>
      </div>
      
<div className='flex justify-center w-full'>
        <button className='mr-2 px-2 h-8 bg-cyan-700 cursor-pointer text-amber-50
        hover:bg-cyan-500 transition-all '
         onClick={handleClick}>{type}</button>
      <button className='mr-2 px-2 h-8  cursor-pointer border-1 border-cyan-700 text-cyan-700
        hover:rounded-md transition-all '
       onClick={() => navigate(`/product/${product.id}`) } >
        Ver detalles
      </button>
</div>
    </li>
  );
}
