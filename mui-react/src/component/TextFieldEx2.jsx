import React from 'react'
import { Typography,Container,Button,Paper,Box,makeStyles,TextField} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor:theme.palette.grey[100]
    }
}))
export const TextFieldEx2 = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.root} >
                <h1>Hello to textField again</h1>
                <Paper component={Box} width="55%" mx="auto" p={2}>
                    <Typography align='center' variant='h5'>create new Account!</Typography>
                    <Box component="form">
                        {/* here box will work as form and box because component of box is eql to form */}
                        {/* if you inspact and check it will appear as form by default it is div in inspact area */}
                    <TextField color="primary" fullWidth  placeholder='Enter Name'/>
                    <TextField color="primary" fullWidth  placeholder='Enter Name Last'/>
                    </Box>
                </Paper>
            </Container>    
        </div>
    )
}
