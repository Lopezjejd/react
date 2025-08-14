import type { Product } from '../types/types';



export function ProductItem({ product,buttonAct,type }: { product: Product,buttonAct: any,type: string }) {
    const handleClick = () => {
       buttonAct(product)
    }
   return(
        <li>
        <div className="img-container">
            <img src={product.image} alt={product.name} />
        </div>
        <h2>{product.name}</h2>
        <span>{product.quantity}</span>
        <span>${product.price}</span>
        
        <button onClick={handleClick}>{type}</button>
        </li>
   )
}