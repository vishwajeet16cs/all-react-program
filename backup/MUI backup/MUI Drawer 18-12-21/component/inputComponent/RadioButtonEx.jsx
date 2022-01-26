import React, { useState } from 'react'
import { Paper,Box,Radio,Container,makeStyles,RadioGroup,FormLabel,FormControlLabel, FormControl } from '@material-ui/core'
const useStyle = makeStyles(theme =>({
    root:{
        backgroundColor:theme.palette.grey[300],
    }
}))
export const RadioButtonEx = () => {
    const classes=useStyle();
    const [gender,setGender]=useState("femail"); 
    const handleChange = (e)=>{
        setGender(e.target.value);  
        console.log(gender)
    }
    
    return (
        <div>
            <Container className={classes.root} pt={3}>
                <Paper component={Box} p={4} mx="auto">
                    <Box component="form" align="center">
                        <FormControl> 
                            <FormLabel>Choose your Gender
                                <RadioGroup value={gender} onChange={handleChange} row >
                                <FormControlLabel label="Male" control={<Radio color="primary"/>} value="male"/> 
                                <FormControlLabel label="Femail" control={<Radio/>} value="femail"/> 
                                <FormControlLabel label="Others" control={<Radio color="primary"/>} value="others"/> 
                                </RadioGroup>                          
                            </FormLabel>
                        </FormControl>
                    </Box>

                </Paper>
            </Container>
            
        </div>
    )
}
