{Object.keys(removeData).length != 0 ?<table className="table table-striped table-dark">
<thead>
    <tr>
        <th>Task</th>
        <th>Comment</th>
    </tr>
</thead>
<tbody>
    {
        emplist.map((emp,index)=>{
                return (
                    <tr>
                        <td>{emp.taskName}</td>
                        <td>{emp.comment}</td>
                        <td><Link to={`/${emp.id}editemp`} className='btn btn-info'>Edit</Link></td>
                        <td>
                            {/* <h6>{emp.id}</h6> */}
                            <button className="btn btn-danger"
                         onClick={deleteEmp.bind(this,emp)}>
                             Delete</button></td>
                    </tr>
                )
        })
    }
   
</tbody>
</table>:null}