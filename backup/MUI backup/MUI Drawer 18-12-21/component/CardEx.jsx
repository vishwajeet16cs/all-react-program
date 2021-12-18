import React from 'react'
import { Grid,container,Button,Typography } from '@material-ui/core'
import { makeStyles,Card,CardActions,CardContent,Box,CardActionArea,CardMedia } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';
const useStyle = makeStyles(theme=>({
    root:{
        // width:"100vw",
        // height:"100vh",
        backgroundColor:theme.palette.grey[200],  
        paddingTop:theme.spacing(5),
          

    }
}))
export const CardEx = () => {
    const classes = useStyle();
    return (
        <div>
            <container>
                <Typography variant='h4' color='secondary' align='center'>Hello To Card</Typography>
                <Grid container spacing={2}>
                
                <Grid item sm={4} lg={4} xs={6} >
                        <Card>
                               <CardActionArea>
                                   <CardMedia component="img"  image="https://rukminim1.flixcart.com/image/832/832/kk4c13k0/headphone/8/h/9/e502a-oneplus-original-imafzjf8fkfvuhdv.jpeg?q=70"/>
                                   
                               <Box p={3}>
                               <Card Content>
                                <Typography component={Box} p={3} variant='h5'>OnePlus Buds Z Bluetooth</Typography>
                                <Typography component={Box} p={3} variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </Card>
                               </Box>
                            <Box p={1} align="center">
                            <CardActions align="center">
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                            </Box>
                               </CardActionArea>
                        </Card>
                    </Grid>
                <Grid item sm={4} lg={4} xs={12} >
                        <Card>
                               <CardActionArea>
                                   <CardMedia component="img"  image="https://rukminim1.flixcart.com/image/832/832/kk4c13k0/headphone/8/h/9/e502a-oneplus-original-imafzjf8fkfvuhdv.jpeg?q=70"/>
                                   
                               <Box p={3}>
                               <Card Content>
                                <Typography component={Box} p={3} variant='h5'>OnePlus Buds Z Bluetooth</Typography>
                                <Typography component={Box} p={3} variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </Card>
                               </Box>
                            <Box p={1} align="center">
                            <CardActions align="center">
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                            </Box>
                               </CardActionArea>
                        </Card>
                    </Grid>
                <Grid item sm={4} lg={4} xs={12} >
                        <Card>
                               <CardActionArea>
                                   <CardMedia component="img"  image="https://rukminim1.flixcart.com/image/832/832/kk4c13k0/headphone/8/h/9/e502a-oneplus-original-imafzjf8fkfvuhdv.jpeg?q=70"/>
                                   
                               <Box p={3}>
                               <Card Content>
                                <Typography component={Box} p={3} variant='h5'>OnePlus Buds Z Bluetooth</Typography>
                                <Typography component={Box} p={3} variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </Card>
                               </Box>
                            <Box p={1} align="center">
                            <CardActions align="center">
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                            </Box>
                               </CardActionArea>
                        </Card>
                    </Grid>
                <Grid item sm={4} lg={4} xs={12} >
                        <Card>
                               <CardActionArea>
                                   <CardMedia component="img"  image="https://rukminim1.flixcart.com/image/832/832/kk4c13k0/headphone/8/h/9/e502a-oneplus-original-imafzjf8fkfvuhdv.jpeg?q=70"/>
                                   
                               <Box p={3}>
                               <Card Content>
                                <Typography component={Box} p={3} variant='h5'>OnePlus Buds Z Bluetooth</Typography>
                                <Typography component={Box} p={3} variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </Card>
                               </Box>
                            <Box p={1} align="center">
                            <CardActions align="center">
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                            </Box>
                               </CardActionArea>
                        </Card>
                    </Grid>
                <Grid item sm={4} lg={4} xs={12} >
                        <Card>
                               <CardActionArea>
                                   <CardMedia component="img"  image="https://rukminim1.flixcart.com/image/832/832/kk4c13k0/headphone/8/h/9/e502a-oneplus-original-imafzjf8fkfvuhdv.jpeg?q=70"/>
                                   
                               <Box p={3}>
                               <Card Content>
                                <Typography component={Box} p={3} variant='h5'>OnePlus Buds Z Bluetooth</Typography>
                                <Typography component={Box} p={3} variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </Card>
                               </Box>
                            <Box p={1} align="center">
                            <CardActions align="center">
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                            </Box>
                               </CardActionArea>
                        </Card>
                    </Grid>
                <Grid item sm={4} lg={4} xs={12} >
                        <Card>
                               <CardActionArea>
                                   <CardMedia component="img"  image="https://rukminim1.flixcart.com/image/832/832/kk4c13k0/headphone/8/h/9/e502a-oneplus-original-imafzjf8fkfvuhdv.jpeg?q=70"/>
                                   
                               <Box p={3}>
                               <Card Content>
                                <Typography component={Box} p={3} variant='h5'>OnePlus Buds Z Bluetooth</Typography>
                                <Typography component={Box} p={3} variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </Card>
                               </Box>
                            <Box p={1} align="center">
                            <CardActions align="center">
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                            </Box>
                               </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </container>
            
        </div>
    )
}
