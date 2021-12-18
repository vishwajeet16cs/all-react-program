import React from 'react'
import { Grid } from '@material-ui/core'
export const GridEx = () => {
    return (
        <div>
            <h5> A breakpoint is the range of predetermined screen sizes that have specific layout requirements.</h5>
            {/* xm will work for all screen size */}
            <Grid xm={12} container justify="space" spacing={1} items>
            <Grid items  lg={6} xs={12} style={{backgroundColor:"green"}}>
                
                <h1>Block one</h1>
            </Grid>
            <Grid items  lg={6} style={{backgroundColor:"lightgreen"}}>
                <h1>Block -two-6</h1>
            </Grid>
            <Grid items  lg={3} style={{backgroundColor:"#29605b"}}>
                <h1>Block one-3</h1>
            </Grid>
            <Grid items  lg={3} style={{backgroundColor:"#29605b"}}>
                <h1>Block change</h1>
            </Grid>
            <Grid items  lg={3} style={{backgroundColor:"#a9a9a9"}}>
                <h1>Block one</h1>
            </Grid>
            <Grid items  lg={3} style={{backgroundColor:"green"}}>
                <h1>Block one</h1>
            </Grid>
            <Grid items  lg={4} style={{backgroundColor:"green"}}>
                <h1>Block one</h1>
            </Grid>
            <Grid items  lg={4} style={{backgroundColor:"green"}}>
                <h1>Block one</h1>
            </Grid>
            </Grid>
        </div>
    )
}
// lg,xs-- all are screen size
/* A breakpoint is the range of predetermined screen sizes that have specific layout requirements.

xs (extra-small): 0px or larger
sm (small): 600px or larger
md (medium): 960px or larger
lg (large): 1280px or larger
xl (extra-large): 1920px or larger */