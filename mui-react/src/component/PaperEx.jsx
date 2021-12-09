import React from 'react';
import { Box,Container,Typography,Button,Paper } from '@material-ui/core';

export const PaperEx = () => {
    return (
        <div>
            <Container>
                <Paper square elevation={8} component={Box} p={4}>
                    {/* coponent as box -- we can use all utility package in Paper component 
                     */}
                    {/* evlevation use to handle shadow can incr and decr by assigning any num value to it */}
                    {/* Square->to make sqr corner of the paper */}
                   
                    <Typography variant="h4">Hello To Paper MUI </Typography>
                    <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis beatae dolorem aspernatur ea eligendi facilis quidem dignissimos, nulla explicabo neque, id quos accusantium exercitationem molestiae perferendis modi sunt asperiores reprehenderit aliquid sed quam in iste alias? Nobis, itaque nulla.</Typography>
                    <Button variant="contained" color="secondary">Learn more</Button>
                   
                </Paper>
            </Container>
        </div>
    )
}
