import React from 'react';
import TableCart from '../components/TableCart';
import { Box } from '@chakra-ui/react';
 


export default function CartPage(){
 

    return(
        <Box sx={{padding:"20px"}}>
            <TableCart/>
        </Box>
    )
}