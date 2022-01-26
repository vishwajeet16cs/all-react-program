import React, { useState } from 'react'
import {Typography,AppBar,Toolbar, Button, Box,makeStyles,display,Icon, IconButton,Menu,MenuItem} from '@material-ui/core'
import {Link} from 'react-router-dom';
// import { display } from '@mui/system';
const useStyles = makeStyles((theme)=>({
    sectionDesktop:{
        display:"none",
        [theme.breakpoints.up("md")]:{
            display:"flex",
        },
    }
}))
const Navbar = () => {
    const classes=useStyles();
    const [mobileMenuAnchorEl,setMobileMenuAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
    const openMobileMenu = (event)=>{
        setMobileMenuAnchorEl(event.currentTarget)
    }
    const closeMobileMenu=()=>{
        setMobileMenuAnchorEl(null);
    }
    const mobilMenu=(
        <Menu 
            anchorEl={mobileMenuAnchorEl}
            id="mobile-menu"
            keepMounted
            open={isMobileMenuOpen}>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/home">Home </MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/about">About </MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/contact">Contact</MenuItem>
        </Menu>
    )
    return (
        <div>
            <AppBar color="secondary" position='static'>
                {/* position static -- it positon is not fixed but by default it if fixed */}
                        {/* by default it will come in the top */}
                        <Toolbar>
                        <Typography variant='h6'  style={{flexGrow:1}}>MUI</Typography>
                        {/* <Button color="inherit" href="https://www.google.com">Home</Button> */}
                        <Box className={classes.sectionDesktop}>
                        <Button color="inherit" component={Link} to="home">Home</Button>
                        <Button color="inherit" component={Link} to="about">About</Button>
                        <Button color="inherit" component={Link} to="contact">Contact</Button>
                        </Box>
                        <IconButton color="inherit" onClick={openMobileMenu}>
                        <Icon style={{fontSize:50}}>menu</Icon>
                        </IconButton>
                        </Toolbar>
                        {/* <button href="https://www.google.com">click me </button> */}
                    </AppBar>
                    {mobilMenu}
                    {/* <h1>hello check</h1> */}
        </div>
    )
}

export default Navbar
