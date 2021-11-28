import React from "react";

class Cart extends React.Component{
    state={
        qty:1
    }
    updatemsg=()=>{
        this.setState({qty:this.state.qty +1})
    }
    decriment=()=>{
        this.setState({qty:this.state.qty -1})
    }
    render (){
        return (<>
        <button className="btn btn-dark" onClick={this.decriment}>Decriment</button>
        <h1>{this.state.qty}</h1>
        <button onClick={this.updatemsg} className="btn btn-danger">update massage</button>
        </>)
    }
}

export default Cart;