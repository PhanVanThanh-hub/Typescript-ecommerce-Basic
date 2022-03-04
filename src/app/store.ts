import { configureStore,combineReducers } from '@reduxjs/toolkit';
import CartReducer from '../features/Cart/cartSlice'; 
import ProductReducer from '../features/Product/productSlice';
const rootReducer =  combineReducers({
    cart :CartReducer,
    product:ProductReducer,
})

export const store = configureStore({
    reducer: rootReducer,

});

 
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

