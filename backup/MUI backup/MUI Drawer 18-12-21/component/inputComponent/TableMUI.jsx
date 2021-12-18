import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Container,Paper,Typography,TableContainer,Table,TableHead,TableBody, makeStyles,TableRow,TableCell,TablePagination} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth:"100vw",
        backgroundColor:theme.palette.grey[300],
        paddingTop:theme.spacing(5),
    }
}))
export const TableMUI = () => {
    const classes=useStyles();
    const [user,setUser] =useState([]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ); 
    const [page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(3);
    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/users")
         .then((responce)=>{
             setUser(responce.data)
             console.log("api dtat is here ")
             console.log(responce.data)
         })
    },[])
    const onChangePage=(event,nextPage)=>{
        setPage(nextPage)
    }
    const onChangeRowsPerPage=(event)=>{
        // alert("change..");
        setRowsPerPage(event.target.value)
    }
    return (
        <div>
            <Container className={classes.root}>
                <Typography varient="h6" color="secondary" align="center">Hello To Table + Pagination</Typography>
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
                                user.slice(page*rowsPerPage,page*rowsPerPage+ rowsPerPage).map((ele)=>(
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
                <TablePagination
                 rowsPerPageOptions={[3,5,10,15,20]} 
                count={user.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={onChangePage}
                onChangeRowsPerPage={onChangeRowsPerPage}/>
                </TableContainer>
            </Container>
            
        </div>
    )
}
