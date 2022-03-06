export interface CartItem {
    id: number;
    price: number;
   quantity: number;
   }
export interface Cart {
    items: CartItem;
}