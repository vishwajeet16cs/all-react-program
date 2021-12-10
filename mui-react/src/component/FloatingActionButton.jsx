import React from 'react'
import {Fab,Container,makeStyles,Icon} from "@material-ui/core";
// import AddIcon from '@mui/icons-material/Add'; 
import { Paper} from '@material-ui/core';
import { lightGreen,lightBlue,teal,lime} from '@material-ui/core/colors';
import { AccountBalance,AccountBalanceTwoTone } from '@material-ui/icons';
import { Add_circle  } from '@material-ui/icons'; 
const useStyles= makeStyles((theme)=>({
    root:{
        width:"100vw",
        height:"100vh",
        backgroundColor:theme.palette.grey[300],
    }
}))
export const FloatingActionButton = () => {
    const classes= useStyles();
    return (
        <div>
            <Container className={classes.root}> 
                <Icon style={{fontSize:50, color:lightBlue[500]}}>add_circle </Icon>
                {/* <add_circle/> no working */}
                
                
            </Container>
        </div>
    )
}
