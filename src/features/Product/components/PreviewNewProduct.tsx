import * as React from 'react';
 
import { Box ,Image,Badge,Text } from '@chakra-ui/react'

import {Product}  from "../../../models/product";
 
export interface PreviewProductProps{
    productReview:Product
}

 
export default function PreviewProductPage({productReview}:PreviewProductProps) {
    
 
        return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={ productReview.url} alt={productReview.name} sx={{height:"200px",width:"100%"}} />
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                    New
                    </Badge>     
                </Box>
                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
                    {productReview.name}
                </Box>

                <Box>
                    ${productReview.price}            
                </Box>   
                <Box display='flex' mt='2' alignItems='center'>
                    <Text>
                        {productReview.detail}
                    </Text>
                </Box>
            </Box>
             
            
             
        </Box>
        )
  
}
