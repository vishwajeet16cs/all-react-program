import React from 'react'
import { Box,Container,Paper,makeStyle, makeStyles, Typography,AppBar,Toolbar, Button} from '@material-ui/core'
const useStyles=makeStyles((theme)=>({
    backgroundColor:theme.palette.grey[300]
}))
export const Appbar = () => {
    return (
        <div>
            <Container>
                {/* <Paper  > */}
                    <AppBar color="primary">
                        {/* by default it will come in the top */}
                        <Toolbar>
                        <Typography variant='h6'>MUI</Typography>
                        <Button >Home</Button>
                        <Button >About</Button>
                        <Button >Contact</Button>
                        </Toolbar>
                    </AppBar>
                {/* </Paper> */}
            </Container>
        </div>
    )
}
