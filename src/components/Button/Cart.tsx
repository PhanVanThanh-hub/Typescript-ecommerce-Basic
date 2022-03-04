import React from 'react';
import { Button } from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
export default function OpenCart(){
    return (
        <Button sx={{padding: "0px",minWidth: "0px",width: "56px",height: "56px",top: "50%",position: "fixed",
                    right: "0px",zIndex: "1050",boxShadow: "rgb(255 229 127 / 30%) 0px 12px 14px 0px",backgroundColor: "rgb(255, 229, 127)",
                    color: "rgb(255, 248, 225)",borderRadius: "8px 0px 0px 8px"}}
        >
            <Link to="/cart"  >
            <ShoppingCartIcon/>
            </Link>
            
        </Button>
    )
}