import React ,{useState}from 'react';
import { Drawer,Box, SimpleGrid} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  
    Button
  } from '@chakra-ui/react'

import Swal from 'sweetalert2';

import OpenAddProduct from '../../../components/Button/AddProduct';
import ProductDetail from '../components/ProductDetail';
import OpenCart from '../../../components/Button/Cart';
import AddProduct from '../components/AddProduct';
import PreviewProductPage from '../components/PreviewNewProduct';

import {useAppSelector,useAppDispatch } from '../../../app/hooks';
import {ListProduct,StateOpen,ProductActions,StatePreview,PreviewProduct} from '../productSlice';
 
 

export default function ProductPage(){
    const dispatch = useAppDispatch();

    //get products and status of drawl add product/preview product
    const products = useAppSelector(ListProduct);
    const productReview = useAppSelector(PreviewProduct);
    const open = useAppSelector(StateOpen);
    const openPreview = useAppSelector(StatePreview);
    
    //
    const closeDrawlAddProduct =  ():void => {
        dispatch(ProductActions.statusAddProduct(false));
    };

    const closeDrawlPreviewProduct =  ():void => {
        dispatch(ProductActions.statusPreviewProduct(false));
    };

    const addProduct = ():void =>{
        dispatch(ProductActions.addProduct(productReview));
        dispatch(ProductActions.statusAddProduct(false));
        dispatch(ProductActions.statusPreviewProduct(false));
        Swal.fire('Success', 'Add New Product', 'success');
    }

    const lastIdProduct :number = products[products.length-1].id
 
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
            <OpenAddProduct/>
            <Drawer
                isOpen={open}
                placement='right'
                onClose={closeDrawlAddProduct}
               
            >
                <AddProduct lastIdProduct={lastIdProduct} closeDrawlAddProduct={closeDrawlAddProduct}/>
            </Drawer>

            <Modal isOpen={openPreview} onClose={closeDrawlPreviewProduct} >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <PreviewProductPage productReview={productReview}/>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={closeDrawlPreviewProduct} >
                        Close
                    </Button>
                    <Button variant='ghost' onClick={addProduct}>Add Product</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
