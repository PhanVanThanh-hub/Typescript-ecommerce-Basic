import React from "react";
import { Table ,TableCaption,Thead,Tr,Th,Td,Tbody,Tfoot} from '@chakra-ui/react';
import { Image,Button} from '@chakra-ui/react';
import {selectList} from '../cartSlice';
import {useAppSelector } from '../../../app/hooks';
import {ListProduct} from '../../Product/productSlice';
import { useAppDispatch } from '../../../app/hooks';
import {CartActions} from '../cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import QuantityField from '../../../components/QuantityField';

export default function TableCart(){
    const products = useAppSelector(ListProduct);
    const cart = useAppSelector(selectList);
    const dispatch = useAppDispatch();
    const total = cart.reduce((total, item) => total + (item.price* item.quantity), 0).toFixed(2)
    const handDeleteItem =(id:string)=>{
        dispatch(CartActions.removeItem(id));
    }
   
    return(
        <Table  variant='striped' colorScheme='teal'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
                <Tr>
                <Th>Product Name</Th>
                <Th>Image</Th>
                <Th>Price</Th>
                <Th  sx={{display: "flex",justifyContent: "center",}}>Quantity</Th>
                <Th isNumeric>Total</Th>
                <Th sx={{display: "flex",justifyContent: "center",}}>Delete</Th>
                </Tr>
            </Thead>
            <Tbody>
               
                {
                    cart.map((value,index)=>{
                        const index1 = products.findIndex(item => (item.id === value.id));
                        let total = (value.quantity *products[index1].price).toFixed(2)
                        return(
                            <Tr key = {index}>
                            <Td>{products[index1].name}</Td>
                            <Td><Image src={products[index1].url} alt={products[index1].name} sx={{width:"40px",height:"40px"}}/></Td>
                            <Td>{products[index1].price}</Td>
                            <Td  ><QuantityField quantity = {value.quantity} productId={products[index1].id}/></Td>
                            <Td isNumeric>${total}</Td>
                            <Td sx={{display: "flex",justifyContent: "center",}}><Button onClick={()=>handDeleteItem(products[index1].id)}><DeleteIcon/></Button></Td>
                            </Tr>
                        )
                    })
                }
                
            </Tbody>
            <Tfoot>
                <Tr>
                <Th>Order Summary</Th>
                <Th> </Th>
                </Tr>
                <Tr>
                <Th>Sub Total</Th>
                <Th> ${total}</Th>
                </Tr>
                <Tr>
                <Th>Coupon Discount</Th>
                <Th> -</Th>
                </Tr>
                <Tr>
                <Th>Shipping Charges</Th>
                <Th> -</Th>
                </Tr>
                <Tr>
                <Th>Total</Th>
                <Th> ${total}</Th>
                </Tr>
            </Tfoot>
        </Table>
    )
}