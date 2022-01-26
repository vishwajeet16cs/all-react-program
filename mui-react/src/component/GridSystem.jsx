import React from 'react';
import { Container, Typography,Box,Paper,Button,Grid} from '@material-ui/core';
export const GridSysetm = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={1}>
                    <Grid item lg={4}>
                        <Paper component={Box} borderLeft={5}
                         boxShadow={3}
                         borderColor="secondary.main" p={3}>
                            <Typography variant='h5'>Hello Grid</Typography>
                            <Typography variant='subtitle1'>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. </Typography>
                            <Button>Read MOre</Button>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper component={Box} borderLeft={5}
                         boxShadow={3}
                         borderColor="secondary.main" p={3}>
                            <Typography variant='h5'>Hello Grid</Typography>
                            <Typography variant='subtitle1'>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. </Typography>
                            <Button>Read MOre</Button>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper component={Box} borderLeft={5}
                         boxShadow={3}
                         borderColor="secondary.main" p={3}>
                            <Typography variant='h5'>Hello Grid</Typography>
                            <Typography variant='subtitle1'>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. </Typography>
                            <Button>Read MOre</Button>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper component={Box} borderLeft={5}
                         boxShadow={3}
                         borderColor="secondary.main" p={3}>
                            <Typography variant='h5'>Hello Grid</Typography>
                            <Typography variant='subtitle1'>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. </Typography>
                            <Button>Read MOre</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )  
}
