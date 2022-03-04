import React from 'react';

import Paper from '@mui/material/Paper';
import { CardMedia ,CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Products(){
    return(
        <Paper elevation={3}>
            <CardMedia
                component="img"
                sx={{ height: "220px"  }}
                image="/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
            />
            <CardContent>
                <Grid container  spacing={2}>
                    <Grid item xs={12}>
                        <Typography>
                            Max Moore
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Bif guslaz mozuvo diuktep zuup ihesudof juhoho zerge pahnu erinaala dagtagig
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{display: "flex",flexDirection:"row",justifyContent: "space-between",alignItems: "center",}}>
                            <Grid container spacing={1}>
                                <Grid item >
                                    <Typography sx={{fontSize:"1rem"}}>
                                        $12.99
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button>
                                <ShoppingCartIcon/>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Paper>
    )
}
