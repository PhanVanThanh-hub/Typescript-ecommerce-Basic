import { Input } from '@chakra-ui/react'
import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import {
    FormControl,
    FormLabel,
    FormHelperText,
  } from '@chakra-ui/react'
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
}

export function InputField({ name, control, label, ...inputProps }: InputFieldProps) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { error, invalid },
    } = useController({ name, control });
    return (
        <FormControl isInvalid={!!invalid}>
            <FormLabel htmlFor='email'>{label}</FormLabel>
            <Input 
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
              
                 
                // helperText={error?.message}
                // inputProps={inputProps}
            
                margin="normal" 
            />
             
            <FormHelperText  >{error?.message}</FormHelperText>
        </FormControl>
         
    );
}
