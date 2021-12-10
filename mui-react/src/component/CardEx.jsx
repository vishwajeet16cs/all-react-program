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
                <Typography variant='h4' color='secondary' align='center'>Hello To Crad</Typography>
                <Grid container spacing={2}>
                    <Grid item sm={3} >
                        <Card>
                               <CardActionArea>
                                   <CardMedia style={{height:300}}  image=""/>
                               <Card Content>
                                <Typography variant='h5'>Post Title</Typography>
                                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </Card>
                            <CardActions>
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                               </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item sm={3} >
                        <Card>
                            <CardContent>
                                <Typography variant='h5' >Post Title</Typography>
                                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={3} >
                        <Card>
                            <CardContent>
                                <Typography variant='h5'>Post Title</Typography>
                                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={3} >
                        <Card>
                            <CardContent>
                                <Typography variant='h5'>Post Title</Typography>
                                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={3} >
                        <Card>
                            <CardContent>
                                <Typography variant='h5'>Post Title</Typography>
                                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={3} >
                        <Card>
                            <CardContent>
                                <Typography variant='h5'>Post Title</Typography>
                                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, dolores natus quasi rerum illo voluptates tempora doloribus laborum quos itaque, nobis minus, nemo hic?</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' color="secondary">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </container>
            
        </div>
    )
}
