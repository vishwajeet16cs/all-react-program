//==>https://fonts.google.com/icons?selected=Material+Icons-- for cdn link
// catch icons from here -->https://fonts.google.com/icons?selected=Material+Icons

import React from 'react'
import { Container,Typography,Paper,Icon } from '@material-ui/core';
import { lightGreen,lightBlue,teal,lime} from '@material-ui/core/colors';
import { AccountBalance,AccountBalanceTwoTone } from '@material-ui/icons';
export const IconsEx = () => {
    let warnig=()=>{
        alert(" Sleep..Zzzzz..")
    }
    return (
        <div>
            <Container>
                <Paper elevation={8} >
                    <h1>hello To Icons</h1>
                    <Icon style={{fontSize:50, color:lightBlue[500]}}>assignment_trned_in</Icon>
                    <Icon style={{fontSize:50, color:teal[900]}}>account_balance</Icon>
                    <Icon style={{fontSize:50, color:lime[900]}}>flutter_dash</Icon>
                    <Icon style={{fontSize:50}}>label_important</Icon>
                    
                    <AccountBalance style={{color:teal[500], fontSize:50}}/>{/* other way to apply icone */}
                    <button className='btn btn-info mb-5' onClick={warnig}>Delete</button>
                    <AccountBalanceTwoTone style={{color:lime[500],fontSize:50}}/>
                </Paper>
            </Container>
            
        </div>
    )
}
