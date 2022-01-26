import React, { useState } from 'react'
import { Paper,Box,Typography,List,ListItem,ListItemText,Container,makeStyles,ListItemIcon,Icon,Divider,collapse, Collapse} from '@material-ui/core'
const useStyles=makeStyles((theme)=>({
    root:{
        backgroundColor:theme.palette.grey[300],
        paddingTop:theme.spacing(1),
        // height:"50vh"
    },
    sidebar:{
        position:"fixed",
        left:0,
        top:0,
        width:"25%",
        // height:"100% "
    },
    nestedItem:{
        paddingLeft:theme.spacing(10)
    }
   
}))
export const ListComp = () => {
    const classes=useStyles();
    const [open,setOpen]=useState(false)
    return (
        <div>
            <Container className={classes.root}>
                <Paper component={Box} width="50%" height="100%" disablePadding>
                    {/* <Typography variant="h4" className={classes.sidebar} color='primary'>Hello to MUI list</Typography> */}
                    {/* in avove class=sidebar it fixed at to left  */}
                    <Typography variant="h6" align='left' component={Box} pl={3} color='primary'>Hello to MUI list</Typography>
                    <List pt={9} align="center" component={Box}>
                    {/* <List disablePadding py={4}> */}
                        {/* disable Padding to remove padding */}
                        <Divider/>
                        {/* use provide division */}
                        <ListItem button>
                            <ListItemIcon><Icon color="primary" style={{fontSize:30}}>account_circle</Icon></ListItemIcon>
                            <ListItemText primary={<Typography variant="h6">Profile</Typography>} secondary="Hi vishwajeet"/>
                        </ListItem>
                        <Divider/>
                        <ListItem button>
                        <ListItemIcon><Icon color='primary' primary style={{fontSize:30}}>location_on</Icon></ListItemIcon>
                            <ListItemText primary="Location" secondary="Bangalore"/>
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon><Icon color='primary' style={{fontSize:30}}>person_add</Icon></ListItemIcon>
                            <ListItemText primary="Find Friend" secondary="Make new friends"/>
                        </ListItem>
                        <ListItem button onClick={()=>setOpen(!open)}>
                        <ListItemIcon><Icon color='primary' style={{fontSize:30}}>notifications</Icon></ListItemIcon>
                            <ListItemText  primary="Notifications" secondary="check Notification"/>
                        </ListItem>
                        <Collapse in={open}>
                        <List pl={3}>
                            <ListItem  className={classes.nestedItem}>
                                <ListItemText>Nested Item 1</ListItemText>
                            </ListItem>
                            <ListItem className={classes.nestedItem}>
                                <ListItemText>Nested Item 2</ListItemText>
                            </ListItem>
                            <ListItem className={classes.nestedItem}>
                                <ListItemText>Nested Item 3</ListItemText>
                            </ListItem>
                            <ListItem className={classes.nestedItem} >
                                <ListItemText>Nested Item 4</ListItemText>
                            </ListItem>
                        </List>
                        </Collapse>
                    </List>
                </Paper>
            </Container>
        </div>
    )
}
