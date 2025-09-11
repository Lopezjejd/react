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

        <div className='flex  items-center  p-4'>
            <img className='w-1/2 h-auto object-cover rounded-lg shadow-md'
             src={product.image} alt={product.name} />
 <div className='ml-4 flex flex-col w-1/2  items-center' >
           <div className=' flex flex-col bg-blue-200 p-6 rounded-lg font-bold shadow-md w-full'>
              <span className='inline-block bg-amber-50 w-[8rem] m-1 p-1 pl-0.5'>{product.name}</span>
          
            <span className='inline-block bg-amber-50 w-[8rem] m-1 p-1 pl-0.5'>Precio: ${product.price}</span>
           </div>
 </div>
            
        </div>
      )
        
}
export default ProductDetail;