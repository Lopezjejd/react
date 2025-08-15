import type { Product } from '../types/types';
import { useState } from 'react';
import { ActionType } from '../types/types';


export function ProductItem({ product,buttonAct,type }:
     { product: Product,buttonAct: any,type: string }) {
        const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
       buttonAct(product,quantity)
    }
   return(
        <li>
        <div className="img-container">
            <img src={product.image} alt={product.name} />
        </div>
        <h2>{product.name}</h2>
   
        <span>${product.price}</span>
        <input 
             onChange={(e) => setQuantity(Number(e.target.value))} 
             type="number" 
             name="cantidad" 
             id="quantiti" 
             value={product.quantity || quantity}
             required
             step={1}
                min={1}
                max={10}
           />
      
          
        <button onClick={handleClick}>{type}</button>
        </li>
   )
}