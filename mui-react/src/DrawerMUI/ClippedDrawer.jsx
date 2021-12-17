import React,{useState} from 'react'
import { Box,Button,AppBar,Toolbar,Typography,IconButton,Drawer,List,ListItem,ListItemText,CssBaseline,makeStyles,Icon} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    menuButton:{
        marginRight:theme.spacing(2),
    },
    titile:{
        marginRight:"auto",
    },
    content:{
        padding:theme.spacing(3),
    },
    drawer:{
        width:250,  
    },
    appBar:{
        // zIndex:1200,
        zIndex:theme.zIndex.drawer + 1,
    },
    root:{
        paddingLeft:250, 
    }
}));
export const ClippedDrawer = () => {
    const classes= useStyles();
    const [open,setOpen]= useState(false)
    return (
        <div className={classes.root}>
            <CssBaseline>
                <Drawer open={open} onClose={()=>setOpen(false)} variant="permanent">
                    {/* variant="permanent" fix the position */}
                    {/* if thisn is over lap can be over come by zindex */}
                    <Toolbar/>
                    {/* it will over come the problem of over lapping */}
                    {/* by providing appropriate height */}
                    <List disablPadding className={classes.drawer} >
                        <ListItem button>
                            <ListItemText primary="First Item"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Second Item"/>
                        </ListItem>

                    </List>
                </Drawer>
                <AppBar position="fixed" color="secondary" className={classes.appBar}>
                    <Toolbar>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit"
                        onClick={()=>setOpen(true)}>
                        <Icon style={{fontSize:50}}>menu</Icon>
                        </IconButton> */}
                        <Typography variant='h6' className={classes.titile}>MUI❤️</Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <main className={classes.content}>
                <Toolbar/>
                    <Typography variant='h2'>New Reactjs feature!</Typography>
                    <Typography align='justify'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam error magni et temporibus labore ullam recusandae quis odio mollitia quibusdam! Optio pariatur a eveniet. Itaque expedita deleniti cum cupiditate explicabo assumenda quod officiis ipsam velit modi? Animi, voluptatibus voluptatum tempora non, dolorem aliquam iste deleniti impedit, recusandae soluta assumenda fugit.
                    </Typography>
                </main>
            </CssBaseline>
        </div>
    )
}
