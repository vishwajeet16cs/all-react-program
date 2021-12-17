import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const  NavBar=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='grey'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            // color="inherit"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              GitHub Issues
            {/* <MenuIcon /> */}
          </IconButton>
          {/* <Typography color="primary" variant="h1" component="div" sx={{ flexGrow: 1 }}>
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar