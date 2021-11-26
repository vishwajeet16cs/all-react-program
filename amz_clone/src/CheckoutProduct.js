import React from 'react';
import './Checkoutproduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct ({id,title,image,price,rating}){
  const [{basket},dispatch]= useStateValue();
    
    const removeFromBasket =()=>{
        // Remove item from bASKET
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,  
        });
    }


    return(<div className="checkoutProduct">

<img className="checkoutProduct_img" src={image} alt =""/>
<div className="checkoutproduct_info">
<p className="checkoutproduct_title" >{title}</p>

<p className="checkoutproduct_price">
<small>Rs </small>
<strong>{price}</strong>
</p>

<div className="product__rating">
                {Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))
                }
            </div>

            <button onClick={removeFromBasket}>Remove from basket</button>
</div>
    </div>
    )
}

export default CheckoutProduct;