import React from 'react'
import ItemCard from "./ItemCard"; 
import data from './Data';

export default function Home() {
  // console.log(productData)
  // let arr=productData
    return (
        <>
       
        {/* <h6>{JSON.stringify(data.productData)}</h6> */}
         <h1  className="text-center mt-3">All Items</h1>
            <section className="py-4 container" >
              <div className=" row justify-content-center">
                {data.productData.map((ele,index)=>{
                  // console.log(ele)
                  return(<ItemCard img={ele.img}
                     title={ele.title} 
                     desc={ele.desc}
                     price={ele.price}
                     item={ele} 
                     key={index}/>)
                })}
              {/* <img src={"./img/mango.jpg"} alt="mango image" /> */}
               </div>

             </section>
        </>
    )
}
