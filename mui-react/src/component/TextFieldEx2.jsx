import React from 'react'
import { Typography,Container,Button,Paper,Box,makeStyles,TextField,Icon,InputAdornment} from '@material-ui/core'
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
                <Typography variant="h3" align='center'>Hello to textField again</Typography>
                <Paper component={Box} width="55%" mx="auto" p={2}>
                    <Typography align='center' variant='h5'>create new Account!</Typography>
                    <Box component="form">
                        {/* here box will work as form and box because component of box is eql to form */}
                        {/* if you inspact and check it will appear as form by default it is div in inspact area */}
                    <TextField fullWidth  placeholder='Enter Name'
                       variant="outlined"
                       color="secondary"
                       label="Last Name"
                       margin='normal'
                       InputProps={{
                           endAdornment:(
                            <InputAdornment positiom="end">
                            <Icon color="secondary" style={{fontSize:30}}>account_circle</Icon>
                            </InputAdornment>
                           )
                       }}/>
                    <TextField fullWidth  placeholder='Enter Name Last' margin="normal"
                    variant="outlined"
                    label="Last Name"
                    color='secondary'
                    InputProps={{
                        endAdornment:(
                         <InputAdornment positiom="end" >
                         <Icon color="secondary" style={{fontSize:30}}>account_circle</Icon>
                         </InputAdornment>
                        )
                    }}
                    />
                    {/* <Icon style={{fontSize:50}}>account_circle</Icon> */}
                    <TextField fullWidth  placeholder='Enter Message' margin="normal"
                    variant="outlined"
                    label="Message"
                    color="secondary"
                    multiline
                    rows={4}
                    helperText="min 144 char"
                    />
                    </Box>
                    <Box mt={2}>
                        <Button variant='contained'

                        color="secondary">
                            Sign Up
                        </Button>
                    </Box>
                </Paper>
            </Container>    
        </div>
    )
}
