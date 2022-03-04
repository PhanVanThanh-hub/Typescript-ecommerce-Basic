import React,{useState} from 'react';
import { Button ,Input,Box} from '@chakra-ui/react';

import {CartActions} from '../features/Cart/cartSlice';
import { useAppDispatch } from '../app/hooks';
interface QuantityProps{
    quantity : number,
    productId : string
}

function QuantityField({quantity,productId}:QuantityProps) {
    const dispatch = useAppDispatch();
    const changeQuantity = (id:string,quantity:number)=>{
        let change ={
            id : id,
            quantity:quantity,
        }
        
        dispatch(CartActions.changeQuantityItem(change));
    }
    return (
        <Box sx={{    display: "flex",justifyContent: "center",alignItems: "center",}}> 
            <Button
                onClick={() => {
                    if(quantity!==1) 
                    changeQuantity(productId,-1)
                }}
                style={{ height: "100%"}}
                 
            >
                -
            </Button>
            <Input value={quantity} type="number" style={{ width: "70px", textAlign: "center" }} disabled/>
            <Button
                onClick={() => changeQuantity(productId,1)}
                style={{ height: "100%"}}
            >
                +
            </Button>
           
        </Box>        
    );
}

export default QuantityField;