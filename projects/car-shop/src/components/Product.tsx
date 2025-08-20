import type { Product } from '../types/types';
import { useState } from 'react';
import { ActionType } from '../types/types';
import { useCart } from '../context/CartContext'; // 👈 usamos el context

interface ProductItemProps {
  product: Product
  type: typeof ActionType[keyof typeof ActionType]
}

export function ProductItem({ product, type }: ProductItemProps) {
  const [quantity, setQuantity] = useState(1);
  
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
    <li>
      <div className="img-container">
        <img src={product.image} alt={product.name} />
      </div>
      <h2>{product.name}</h2>

      <span>${product.price}</span>
      <span>{type === ActionType.add ? quantity.toString() : product.quantity.toString()}</span>
      
      <div>
        <button 
          disabled={type === ActionType.add ? quantity >= 10 : product.quantity >= 10}
          onClick={() => {
            if (type === ActionType.add) {
              setQuantity(quantity + 1);
            } else {
              IncreaseAmount(product);
            }
          }}
        >+</button>

        <button
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
      
      <button onClick={handleClick}>{type}</button>
    </li>
  );
}
