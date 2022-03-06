import * as React from 'react';
 
import { Box ,Image,Badge,Text ,Button,Stack} from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {Product}  from "../../../models/product";

import { useAppDispatch } from '../../../app/hooks';
import {CartActions} from '../../Cart/cartSlice';
import {CartItem} from '../../../models/cart';
 
 
export interface ProductProps{
    product: Product;
}


 
export default function ProductDetail({product}:ProductProps) {
        const dispatch = useAppDispatch();
         
        const handleAddCart =  (values: Product) => {
            let cart : CartItem={
                id:values.id,
                price:values.price,
                quantity:1
            }
            dispatch(CartActions.addCart(cart));
        };
         
        return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={ product.url} alt={product.name} sx={{height:"200px",width:"100%"}} />
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                    New
                    </Badge>     
                </Box>
                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
                    {product.name}
                </Box>

                <Box>
                    ${product.price}            
                </Box>   
                <Box display='flex' mt='2' alignItems='center'>
                    <Text>
                        {product.detail}
                    </Text>
                </Box>
            </Box>
             
            <Stack direction={['column', 'row']} sx={{justifyContent: "center",paddingBottom:"12px"}}>
                <Button  leftIcon={<ShoppingCartIcon />} onClick={()=>handleAddCart(product)}>
                    Add cart
                </Button>
            </Stack>
             
        </Box>
        )
  
}
