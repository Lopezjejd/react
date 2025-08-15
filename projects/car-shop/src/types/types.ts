export  type Product ={
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}
export const ActionType = { 
    remove:'Remove from cart',
    add:'Add to Cart'
}as const;
