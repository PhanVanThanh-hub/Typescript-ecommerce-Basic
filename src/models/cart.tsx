export interface CartItem {
    id: string;
    price: number;
   quantity: number;
   }
export interface Cart {
    items: CartItem;
}