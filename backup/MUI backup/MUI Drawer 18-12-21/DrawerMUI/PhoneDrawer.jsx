import React,{useState} from 'react'
import { Box,Button,AppBar,Toolbar,Typography,IconButton,SwipeableDrawer ,List,ListItem,ListItemText,CssBaseline,makeStyles,Icon} from '@material-ui/core'
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
    }
}));
export const PhoneDrawer = () => {
    const classes= useStyles();
    const [open,setOpen]= useState(false)
    return (
        <div>
            <CssBaseline>
                <SwipeableDrawer open={open} onClose={()=>setOpen(false)}>
                    <List disablPadding className={classes.drawer} >
                        <ListItem button>
                            <ListItemText primary="First Item"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Second Item"/>
                        </ListItem>

                    </List>
                </SwipeableDrawer>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit"
                        onClick={()=>setOpen(true)}>
                        <Icon style={{fontSize:50}}>menu</Icon>
                        </IconButton>
                        <Typography variant='h6' className={classes.titile}>MUI❤️</Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <main className={classes.content}>
                    <Typography variant='h2'>New Reactjs feature hello check!</Typography>
                    <Typography align='justify'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam error magni et temporibus labore ullam recusandae quis odio mollitia quibusdam! Optio pariatur a eveniet. Itaque expedita deleniti cum cupiditate explicabo assumenda quod officiis ipsam velit modi? Animi, voluptatibus voluptatum tempora non, dolorem aliquam iste deleniti impedit, recusandae soluta assumenda fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero, cupiditate iste sit dicta ullam mollitia quas vitae quisquam aut aperiam molestiae, ipsum nulla, eligendi error natus iure? Ipsam a deserunt molestias modi alias. Accusamus dolorem quos, rerum explicabo id odio adipisci, necessitatibus assumenda sint debitis laboriosam soluta, ab possimus?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam error magni et temporibus labore ullam recusandae quis odio mollitia quibusdam! Optio pariatur a eveniet. Itaque expedita deleniti cum cupiditate explicabo assumenda quod officiis ipsam velit modi? Animi, voluptatibus voluptatum tempora non, dolorem aliquam iste deleniti impedit, recusandae soluta assumenda fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero, cupiditate iste sit dicta ullam mollitia quas vitae quisquam aut aperiam molestiae, ipsum nulla, eligendi error natus iure? Ipsam a deserunt molestias modi alias. Accusamus dolorem quos, rerum explicabo id odio adipisci, necessitatibus assumenda sint debitis laboriosam soluta, ab possimus?
                    </Typography>
                </main>
            </CssBaseline>
        </div>
    )
}
