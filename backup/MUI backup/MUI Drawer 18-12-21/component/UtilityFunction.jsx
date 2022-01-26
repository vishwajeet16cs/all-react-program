import React from 'react'
import { Container,makeStyles,Box, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    root:{
        // width:"100vw",
        // height:"20vh",
        backgroundColor: theme.palette.grey[200],
    },
}))
export const UtilityFunction = () => {
    const classes =useStyles();
    return(
        <>
            <Container className={classes.root} >
                <Paper width="50" height="100" component={Box} p={3} 
                // elevation={4}
                borderLeft={5}
                boxShadow={3}
                borderColor="secondary.main">
                    
                    <Typography variant="h5">Back To Work</Typography>
                    <Typography variant="subtitle1" align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga aut debitis, sed laboriosam excepturi pariatur laudantium tempore consequuntur expedita similique sequi blanditiis possimus nulla consectetur et eum, consequatur itaque.</Typography>
                </Paper>

            </Container>
        </>
    )
    return (
        <div>
            
        </div>
    )
}


{/* pl-> pading left
    pr-> right , rt->top, b->bottom
    px->left & right
    py-> top and bottom
    p->from all direction */}
    
     {/* ml-> margin left
    mr-> right , rt->top, b->bottom
    mx->left & right
    my-> top and bottom
    m->from all direction */}
    // bgcolor="colorName"
    // borderLeft={5}--> to give border from left
    //borderColor="secondary.main"
    //gutterBottom -> to give space in bottom
    // gutterBottom="false"-> to remove space from bottom
    //boxShadoww={0-25}-> any no can take in b/w 0-25