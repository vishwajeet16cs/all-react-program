import React, { useState } from 'react'
import { Box,Container,Paper,Checkbox,makeStyles, Typography,FormControl,FormControlLabel } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor:theme.palette.grey[400],
        paddingTop:theme.spacing(5),
        // use this way for give space from top of the contaoner
    }
}))
export const CheckBoxEx2 = () => {
    const classes=useStyles();//call useStyle befor using class from useStyel
    const [remember,setRemember]=useState(false);
    const handleChange=(e)=>{
        setRemember(e.target.checked)
    }
    return (
        <div>
            <Container className={classes.root}>
            <Typography varient="h4">Hello TO CheckBox Again</Typography>
            <Paper componet={Box} p={4} mx="auto">
                <Typography varient="h3"> {remember?"true":"false"}</Typography>
                <Box pl={3} pt={1 } component="form" >
                    <FormControl>
                        <FormControlLabel label="Keep me remember" control={<Checkbox onChange={handleChange} checked={remember}/>}/>
                    </FormControl>
                </Box>
            </Paper>
            </Container>
            
        </div>
    )
}
