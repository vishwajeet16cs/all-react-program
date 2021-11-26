import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
let Checkout=()=>{
    const [{ basket}]=useStateValue();     
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src ="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21/Bank/Phase-4/update/Bank_PC__1500x90_3.jpg" alt=""/>
       {basket?.length===0 ? (
           <div>
               <h2>ooohhhhh.. you steel have empty basket!</h2>
               <p>you have no items in your basket</p>
  
           </div>
        
       ):(
         <div>
             <h2 className="check__title">Your shopping basket</h2>
             {/* List out all of the Checkout Product */}
             
             {basket?.map((item)=>(
                 <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 />
             ))}
             
         </div>  
         
       )}
       </div>
       {basket.length > 0 && (
           <div className="checkout__right">
            
               <Subtotal />
           </div>
       )}
        </div>
           );
}
export default Checkout