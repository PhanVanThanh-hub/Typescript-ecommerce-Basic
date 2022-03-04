import React ,{useState}from 'react';
import { Box } from '@chakra-ui/react'
import ProductDetail from '../components/ProductDetail';
import { SimpleGrid } from '@chakra-ui/react';
import OpenCart from '../../../components/Button/Cart';
import {useAppSelector } from '../../../app/hooks';
import {ListProduct} from '../productSlice';



export default function ProductPage(){
    const products = useAppSelector(ListProduct);
  
 
    return(
        <Box sx={{padding:"20px"}}>
            <SimpleGrid columns={3} spacingX="2" spacingY="2">
                {products.map((value,index)=>{
                    return(
                      <ProductDetail product={value} key={index}/> 
                    )
                })}
                
                
            </SimpleGrid>
            <OpenCart/>
        </Box>
    )
}
