import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Box,Container,Paper,Typography,TableContainer,Table,TableHead,TableBody, makeStyles,TableRow,TableCell} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor:theme.palette.grey[300],
        paddingTop:theme.spacing(5),
    }
}))
export const TableMUI = () => {
    const classes=useStyles();
    const [user,setUser] =useState([]); 
    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/users")
         .then((responce)=>{
             setUser(responce.data)
             console.log("api dtat is here ")
             console.log(responce.data)
         })
    },[])
    return (
        <div>
            <Container className={classes.root}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                             <TableRow>
                                 <TableCell>Name</TableCell>
                                 <TableCell>Email</TableCell>
                                 <TableCell>Phone</TableCell>
                                  <TableCell>Company</TableCell>
                                  <TableCell>WebSite</TableCell>
                             </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                user.map((ele)=>(
                            <TableRow>
                                <TableCell>{ele.name}</TableCell>
                                <TableCell>{ele.email}</TableCell>
                                <TableCell>{ele.phone}</TableCell>
                                <TableCell>{ele.company.name}</TableCell>
                                <TableCell>{ele.website}</TableCell>
                                
                            </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            
        </div>
    )
}
