import React,{useState} from 'react'
import { Box,Button,AppBar,Toolbar,Typography,IconButton,Drawer,List,ListItem,ListItemText,CssBaseline,makeStyles,Icon,Divider,Hidden} from '@material-ui/core'
const drawerWidth=250;
const useStyles = makeStyles((theme)=>({
    root:{
        // paddingLeft:drawerWidth,
        [theme.breakpoints.up("sm")]:{
            paddingLeft:drawerWidth,
        } 
    },
    menuButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")]:{
            display:"none",
            // break point is sm - small device -dispaly nun
            // after reaching sm it will not dispaly 
        }
    },
    titile:{
        marginRight:"auto",
    },
    content:{
        padding:theme.spacing(3),
    },
    drawer:{
        width:drawerWidth,  
    },
    appBar:{
        // width: `calc(100% - ${drawerWidth}px)`,
        // calc is css function writen in side ``
        [theme.breakpoints.up("sm")]:{
            width:`calc(100% - ${drawerWidth}px)`,
        }

    }
}));
export const ResponsiveDrawer = () => {
    const classes= useStyles();
    const [open,setOpen]= useState(false)
    const drawerItems=(
        <> 
        <Toolbar/>
        <Divider/>
            <List disablPadding className={classes.drawer} >
                            <ListItem button>
                                <ListItemText primary="First Item"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Second Item"/>
                            </ListItem>
                        </List> 
        </>
    ) 
    return (
        <div className={classes.root}>
            <CssBaseline>
                <Hidden smUp implementation='css'>
                    <Drawer open={open} onClose={()=>setOpen(false)}>
                         {drawerItems}
                    </Drawer>
                </Hidden >
                <Hidden xsDown>{/* it will hide after break point at xSmall  */}
                <Drawer open={open} onClose={()=>setOpen(false)} variant='permanent'>
                {drawerItems}
                </Drawer>
                </Hidden>
                <AppBar className={classes.appBar} position="fixed" color="secondary">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit"
                        onClick={()=>setOpen(true)}>
                        <Icon style={{fontSize:50}}>menu</Icon>
                        </IconButton>
                        <Typography variant='h6' className={classes.titile}>MUI 🕶️</Typography>
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
