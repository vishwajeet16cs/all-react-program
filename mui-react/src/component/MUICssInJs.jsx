import React from 'react';
import {Box,Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles((theme)=>({
    cotainer:{
        maxWidth:"100vw",
        maxHeight:"100vh",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"space-evenly",
        // flexWrap:"wrap",
        
    },
    mybox:{
        width:300,
        color:"black",
        padding:50,
        backgroundColor:"#c7f7d8",
        // backgroundColor:theme.palette.common.black,
        //https://mui.com/customization/default-theme/
        // refer above link to use theme in mui (Default Theam)
        borderRadius:100,
        boxShadow:"0px 10px 10px rgba(100,0,100,0.9)",
        }
}))
export const MUICssInJs = () => {
    const classes = useStyles();
    return (
        <div className={classes.cotainer} m={2} pt={3} >
            <Box className={classes.mybox} >
                <Typography align="center" variant="h6">Hadding 1</Typography>
                <Typography variant="body1" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto debitis assumenda qui eligendi corrupti exercitationem voluptate facilis pariatur aperiam!</Typography>
            </Box>
            <Box  className={classes.mybox}>
                <Typography align="center" variant="h6">Hadding 1</Typography>
                <Typography variant="body1" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto debitis assumenda qui eligendi corrupti exercitationem voluptate facilis pariatur aperiam!</Typography>
            </Box>
            <Box  className={classes.mybox}>
                <Typography align="center" variant="h6">Hadding 1</Typography>
                <Typography variant="body1" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto debitis assumenda qui eligendi corrupti exercitationem voluptate facilis pariatur aperiam!</Typography>
            </Box>
           
        </div>
    )
}
