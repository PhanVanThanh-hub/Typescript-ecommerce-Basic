import React from 'react';
import { Button } from '@chakra-ui/react'

import { useAppDispatch } from '../../app/hooks';
import {ProductActions} from '../../features/Product/productSlice';
export default function OpenAddProduct(){
    const dispatch = useAppDispatch();
    const openDrawlAddProduct =  ():void => {
       
        dispatch(ProductActions.statusAddProduct(true));
    };
    return (
        <Button sx={{padding: "0px",minWidth: "0px",width: "56px",height: "56px",top: "40%",position: "fixed",
                    right: "0px",zIndex: "1050",boxShadow: "rgb(255 229 127 / 30%) 0px 12px 14px 0px",backgroundColor: "rgba(87, 197, 134, 0.8)",
                    color: "rgb(255, 248, 225)",borderRadius: "8px 0px 0px 8px"}}
                onClick={()=>openDrawlAddProduct()}
        >
           Add Product
            
        </Button>
    )
}