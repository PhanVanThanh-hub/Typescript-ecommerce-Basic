import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem} from "../../models/cart";
import {RootState} from '../../app/store';

 
interface InviteeState {
    list:CartItem[]
}

interface changeQuantity{
    id:number,
    quantity:number
}

const initialState: InviteeState = {
    list: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state , action : PayloadAction<CartItem>){
            const cart=action.payload
            const index = state.list.findIndex(item => (item.id === cart.id));
            if (index >= 0) {
                state.list[index].quantity += 1;
            } else {
                state.list.push(cart);
            }
        },
        removeItem(state,action:PayloadAction<number>){
            const ItemID = action.payload
            const index = state.list.findIndex(item => (item.id === ItemID));
            state.list.splice(index, 1);
        },
        changeQuantityItem(state , action : PayloadAction<changeQuantity> ){
            
            const productId = action.payload.id
            const quantity = action.payload.quantity
            const index = state.list.findIndex(item => (item.id === productId));
            state.list[index].quantity += quantity;
        }
        
    },
})

export const CartActions = CartSlice.actions;

//Selectors
export const selectList = (state: RootState) => state.cart.list;
//reducer
const CartReducer = CartSlice.reducer
export default CartReducer
 