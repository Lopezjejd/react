import { ProductItem } from "../components/Product";
import { useCart } from "../context/CartContext";

import { ActionType } from "../types/types";



const Home = () => {
const {products}= useCart()
    return (
        <>
        <h1>Pc Gamer Shop</h1>
        <p>For here you will find the best gaming pcs</p>
        <ul className='product-list'>
            {products.map(product => (
            <ProductItem product={product} type={ActionType.add} key={product.id}  />
            ))}
        </ul>
        </>
    )
}
export default Home