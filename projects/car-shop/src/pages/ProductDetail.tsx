import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
function ProductDetail() {
    const { products } = useCart();
    const { id } = useParams<{ id: string }>();// Obtener el ID del producto desde los parámetros de la URL
    
    const product = products.find(p => p.id === Number(id));// Buscar el producto en la lista de productos
      if (!product) {
        return <div>producto no encontrado</div>
      }

      return (
  console.log("PRODUCTO:", product),
console.log("IMAGEN:", product?.image),

        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>Precio: ${product.price}</p>
            
        </div>
      )
        
}
export default ProductDetail;