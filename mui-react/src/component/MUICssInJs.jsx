import React from 'react';
import {Box,Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles({
    cotainer:{
        maxWidth:"100vw",
        maxHeight:"100vh",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"space-evenly"
        
    },
    mybox:{
        width:300,
        color:"white",
        padding:50,
        backgroundColor:"#768d76",
        borderRadius:40,
        boxShadow:"0px"
    }
})
export const MUICssInJs = () => {
    const classes = useStyles();
    return (
        <div className={classes.cotainer}>
            <Box className={classes.mybox}>
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
