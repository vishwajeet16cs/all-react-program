import React from 'react'
import { Paper,Container,Box,Typography,Button } from '@material-ui/core'
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Delete from "@material-ui/icons/Delete"
import { lightBlue,lightGreen } from '@material-ui/core/colors'
export const ButtonEx2M = () => {
    return (
        <div>
            <Container maxWidth="sm">
                <Paper component={Box} p={7 } elevation={5}>
                    <Typography align='center' style={{color:lightBlue[900]}} variant='h3'>About SIT</Typography>
                    <Box mt={4}>
                    <Typography  align='justify' style={{color:lightGreen[900]}} variant='subtitle1'>Siddaganga Institute of Technology is a private college in Tumakuru, Karnataka, India. It is run by the Sri Siddaganga Educational Society. It offers 13 undergraduate, 13 postgraduate and 16 PhD programmes.</Typography>
                    </Box>
                    <Box mt={4}>
                    <Button color="secondary" variant="contained" fullWidth
                    size="large" startIcon={<Delete/>}>Read MOre</Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}
