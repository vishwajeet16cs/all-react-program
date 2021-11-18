  import React from 'react';
  import { useCart } from 'react-use-cart';

  const ItemCard=(props )=>{
      const {addItem}=useCart();
      return (
          <>
          {/* <h1>{props.item}</h1> */}
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
          <div className="card p-0 overflow-hidden h-100 shadow" >
            <img className="card-img-top img-fluid" src={props.img} />
                <div className="card-body text-center">
                     <h5 className="card-title">{props.title}</h5>
                     <h5 className="card-text">${props.price}</h5>
                     <p className="card-text">{props.desc}</p>
                     <button className="btn btn-primary" onClick={()=>addItem(props.item)}>Add to cart</button>
                     {/* addItem is in build function of react-use-cart */}
                </div>
           </div>
          </div>
           
          
          </>
      )
  }
  export default ItemCard;