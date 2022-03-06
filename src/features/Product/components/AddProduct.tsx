import React ,{useState}from 'react';
import {Button} from '@chakra-ui/react'
import {
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'; 

import {Product} from '../../../models/product';

import FormAdd from './FormAddProduct';

import { useAppDispatch } from '../../../app/hooks';
import {ProductActions} from '../productSlice';
 
 
export interface LastIdProps{
    lastIdProduct:number,
    closeDrawlAddProduct?:()=>void,
}

export default function AddProduct({lastIdProduct,closeDrawlAddProduct}:LastIdProps){
    
    const dispatch = useAppDispatch();
  
    const initalValues: Product = {
        id: lastIdProduct+1,
        name: '',
        detail:'',
        url:'',
        price:0,
        amount:0,
    }  
 

    const handleFormSubmit = async (values: Product) => {
        dispatch(ProductActions.statusPreviewProduct(true));
        dispatch(ProductActions.addPreview(values));
    };

   
     

    return(
        <> 
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create new Product</DrawerHeader>

                <DrawerBody>
                    <FormAdd initalValues={initalValues} onSubmit={handleFormSubmit}/>
                </DrawerBody>
                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={closeDrawlAddProduct} >
                        Cancel
                    </Button>
                   
                </DrawerFooter>
            </DrawerContent>
        </>    
    )
}
