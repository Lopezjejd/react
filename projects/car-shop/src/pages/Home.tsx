import { ProductItem } from "../components/Product";
import { useCart } from "../context/CartContext";

import { ActionType } from "../types/types";



const Home = () => {
const {products}= useCart()
    return (
        
        <>
        <h1 className="text-3xl mt-5 text-center font-medium mb-4"
        ><span className="bg-cyan-600 px-2 py-1 text-amber-50">Pc</span> Gamer Shop</h1>
        <div className=" pb-10
        text-3xl text-start w-fit m-auto"><p className="pb-2">For here you will find the best </p>
            <span className=" inline-block
            px-2 py-1 scale-110 bg-cyan-500 text-white drop-shadow-md text "> Gaming PCS</span>
            </div>
        <ul className='m-auto grid gap-4 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] place-items-center p-4'>
            {products.map(product => (
            <ProductItem product={product} type={ActionType.add} key={product.id}  />
            ))}
        </ul>
        </>
    )
}
export default Home