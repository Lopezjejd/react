import type { Product } from '../types/types';
import { useState } from 'react';
import { ActionType } from '../types/types';

/** Props necesarios para el componente ProductItem */
interface ProductItemProps {
  /** Datos del producto a mostrar */
  product: Product
  /** Función que maneja las acciones del carrito (agregar/remover) */
  buttonAct: (product: Product, quantity: number) => void
  /** Tipo de acción que realizará el componente */
  type: typeof ActionType[keyof typeof ActionType]
  /** Función opcional para incrementar cantidad en el carrito */
  onIncrease?: (product: Product) => void
  /** Función opcional para decrementar cantidad en el carrito */
  onDecrease?: (product: Product) => void
}

/**
 * Componente que muestra un producto individual
 * Puede funcionar en dos modos según el type:
 * - add: Para agregar productos al carrito
 * - remove: Para gestionar productos ya en el carrito
 */
export function ProductItem({ 
  product, 
  buttonAct, 
  type,
  onIncrease,
  onDecrease
}: ProductItemProps) {
    /** Estado local para la cantidad a agregar al carrito */
    const [quantity, setQuantity] = useState(1);

    /** Maneja el click del botón principal (agregar/remover del carrito) */
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
            {/* Muestra quantity o product.quantity según el modo */}
            <span>{type === ActionType.add ? quantity.toString() : product.quantity.toString()}</span>
            
            <div>
                {/* Botones para incrementar/decrementar cantidad */}
                <button 
                    disabled={type === ActionType.add ? quantity >= 10 : product.quantity >= 10}
                    onClick={() => {
                        if (type === ActionType.add) {
                            setQuantity(quantity + 1)
                        } else if (onIncrease) {
                            onIncrease(product)
                        }
                    }}
                >+</button>
                <button
                    disabled={type === ActionType.add ? quantity <= 1 : product.quantity <= 1}
                    onClick={() => {
                        if (type === ActionType.add) {
                            setQuantity(quantity - 1)
                        } else if (onDecrease) {
                            onDecrease(product)
                        }
                    }}
                >-</button>
            </div>
            
            <button onClick={handleClick}>{type}</button>
        </li>
    )
}