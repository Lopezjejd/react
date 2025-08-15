import type { Product } from '../types/types';
import { useState } from 'react';
import { ActionType } from '../types/types';

interface ProductItemProps {
  product: Product
  buttonAct: (product: Product, quantity: number) => void // También mejoramos el tipo any
  type: typeof ActionType[keyof typeof ActionType]
  onIncrease?: (product: Product) => void
  onDecrease?: (product: Product) => void
}

export function ProductItem({ 
  product, 
  buttonAct, 
  type,
  onIncrease, // nuevo prop opcional
  onDecrease  // nuevo prop opcional
}: ProductItemProps) {
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
       buttonAct(product, quantity)
    }

    return(
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
                setQuantity(quantity + 1)
            } else if (onIncrease) {
                onIncrease(product)
            }
         }}>+</button>
         <button
         disabled={type === ActionType.add ? quantity <= 1 : product.quantity <= 1}
          onClick={() => {
            if (type === ActionType.add) {
                setQuantity(quantity - 1)
            } else if (onDecrease) {
                onDecrease(product)
            }
          }}>-</button>
        </div>
        
        <button onClick={handleClick}>{type}</button>
        </li>
   )
}