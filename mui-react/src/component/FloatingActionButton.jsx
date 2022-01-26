import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Fab,Container,Grid,Card,CardActionArea,Box,CardActions,CardMedia,CardContent,makeStyles,Icon, Button, Typography} from "@material-ui/core";
const useStyles= makeStyles((theme)=>({
    root:{
        // width:"100vw",
        // height:"100vh",
        backgroundColor:theme.palette.grey[300],
    },add:{
        position:"fixed",
        bottom:"10%",
        right:"10%",
        zIndex:theme.zIndex.tooltip,
        // it will over come over laping problem of FAButton
    }
}))
export const FloatingActionButton = () => {
    const classes= useStyles();
    const [users,setUsers]=useState([]);
    const loadUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((responce)=>{
            setUsers(responce.data)
            console.log(responce.data)
        })
    }
    useEffect(() => {
       loadUsers();
    }, [])
    return (
        <div>
            <Container className={classes.root}> 
                <Fab className={classes.add}>
                {/* <Button> <Icon style={{fontSize:70, color:lightBlue[500]}} variant="extended">add_circle </Icon> create user</Button> */}
                {/* <add_circle/> no working */}
                {/* <Button color="white">check</Button> */}
                <Icon color="secondary" style={{fontSize:80}}>add_circle</Icon>
                </Fab>
                {/* <pre>{JSON.stringify(users)}</pre> */}
                <Grid container spacing={2}>
                    {
                        users.map(user=>(
                            <Grid item sm={6} lg={4} md={4} >
                                <Card>
                                    <CardActionArea>
                                       <Box p={3} pt={2}>
                                       <CardMedia  component='img' image="https://rukminim1.flixcart.com/image/5000/2000/kf2v3ww0/computer/h/t/m/dell-original-imafvm5ymhkzvdqu.jpeg?q=70"/>
                                       </Box>
                                        <CardContent>
                                            <Typography variant='h6'>{user.name}</Typography>
                                            <Typography variant='h6'>{user.email}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant='contained' color="secondary">view profile</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                
            </Container>
        </div>
    )
}
