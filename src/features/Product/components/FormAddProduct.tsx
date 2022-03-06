import React,{useState} from 'react';
import Box from '@mui/material/Box';
import {InputField} from '../../../components/FormField/InputField';
 
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button  } from '@chakra-ui/react'
import {Product} from '../../../models/product';
import * as yup from 'yup';
export interface ProductProps{
    initalValues?:Product;
    onSubmit:(formValues: Product) => void;
}

export default function FormAdd({initalValues,onSubmit}:ProductProps){
    const [error, setError] = useState<string>();
    const schema = yup
        .object({
            name:yup
                .string()
                .required('Please enter name product'),
            price:yup
                .number()
                .required('Please enter price product')
                .typeError('Please enter a vailable number'),
            url: yup
                .string()
                .required('Please enter url image Product'),
            detail: yup
                .string()
                .required('Please enter url image Product'),
            amount: yup
                .number()
                .positive('Please enter position number')
                .integer('Please enter interger number')
                .required('Please enter amount product')
                .typeError('Please enter a vailable number'),
             
        })
        .required();

    const { control, handleSubmit, formState: {isSubmitting} } = useForm<Product>({
        defaultValues: initalValues,
        resolver: yupResolver(schema),
    });
    const handleFormSubmit = async (formValues: Product) => {
        try {
       
            setError('')
            await onSubmit?.(formValues);
        } catch (error: any) {
            setError(error.message)
        }
    };
  
    return(
      
          
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputField name="name" control={control} label="Name Product" />
                <InputField name="detail" control={control} label="Detail Product" />
                <InputField name="url" control={control} label="Url image" />
                <InputField name="price" control={control} label="Price Product" />
                <InputField name="amount" control={control} label="Amount Product" />
                <Button colorScheme='blue' mr={3} type="submit" variant="contained"   >
                    Preview
                </Button>
            </form>

         
    )
}