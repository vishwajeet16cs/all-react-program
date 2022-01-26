//referal-->https://www.youtube.com/watch?v=38nKcolwShQ&list=PLgzD0aHYwynI6qLVJ4XwpH1nnO7cg3lSE&index=7
import React from 'react';
import { Container,makeStyles, Typography } from '@material-ui/core';
import { lightGreen,grey,orange } from '@material-ui/core/colors';
const useStyle=makeStyles({
    myheading:{
        color:grey[900],
    }
})
export const ColorsUseMui = () => {
    const classes= useStyle();
    return (
        <div>
                <Container className={classes.myheading}>
                    <Typography variant='h2' style={{backgroundColor:lightGreen}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[50]}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[100 ]}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[200 ]}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[300 ]}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[400 ]}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[500 ]}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[600 ]}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[700 ]}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[800 ]}}>Hello to Colors</Typography>
                    <Typography variant='h2' style={{backgroundColor:lightGreen[900 ]}}>Hello to Colors</Typography>
                </Container>
            
        </div>
    )
}
