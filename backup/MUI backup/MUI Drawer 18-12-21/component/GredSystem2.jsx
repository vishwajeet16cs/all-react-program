import React from 'react';
import { Container, Typography,Box,Paper,Button,Grid} from '@material-ui/core';
export const GridSysetm2 = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={4} align="justify">
                    <Grid item lg={3} md={6} xs={6} sm={6}>
                        <Paper component={Box} borderLeft={5}
                         boxShadow={3}
                         borderColor="primary.main" p={3}>
                            <Typography variant='h5'>Hello Grid-2</Typography>
                            <Typography variant='subtitle1'>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.--The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout. </Typography>
                            <Button>Read MOre</Button>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} md={6} xs={6} sm={6}>
                        <Paper component={Box} borderLeft={5}
                         boxShadow={3}
                         borderColor="primary.main" p={3}>
                            <Typography variant='h5'>Hello Grid-2</Typography>
                            <Typography variant='subtitle1'>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.--The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout. </Typography>
                            <Button>Read MOre</Button>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} md={6} xs={6} sm={6}>
                        <Paper component={Box} borderLeft={5}
                         boxShadow={3}
                         borderColor="primary.main" p={3}>
                            <Typography variant='h5'>Hello Grid-2</Typography>
                            <Typography variant='subtitle1'>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.--The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout. </Typography>
                            <Button>Read MOre</Button>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} md={6} xs={6} sm={6}>
                        <Paper component={Box} borderLeft={5}
                         boxShadow={3}
                         borderColor="primary.main" p={3}>
                            <Typography variant='h5'>Hello Grid-2</Typography>
                            <Typography variant='subtitle1'>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.--The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout. </Typography>
                            <Button>Read MOre</Button>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} md={6} xs={6} sm={6}>
                        <Paper component={Box} borderLeft={5}
                         boxShadow={3}
                         borderColor="primary.main" p={3}>
                            <Typography variant='h5'>Hello Grid-2</Typography>
                            <Typography variant='subtitle1'>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.--The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout. </Typography>
                            <Button>Read MOre</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )  
}
