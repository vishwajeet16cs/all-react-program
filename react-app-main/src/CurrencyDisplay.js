import React,{useEffect,useState} from 'react'
import axios from 'axios';
const CurrencyDisplay = () => {
    const [data,setData]=useState([]);
    // const []
    console.log(data)
    useEffect(() => {
        axios.get("http://localhost:8000/currency")
        .then((resp)=>{
            setData(resp.data)
        })
    }, [])
    return (
        <div>
           <div>
            <label>Amount</label><br/>
            <input type="number"className='input'/><br/><hr/>
            <label>Currency Type</label><br/>
            {/* <select value={two1} onChange={three1}> */}
            <select>
                {data.map((option)=>{
                    return <option value={option.base} >{option.base}</option>
                })}
                
            </select>
            <br/>
            <label>To</label>
            <hr/>
            <label>INR</label>
            <input type="number"/><br/>
            <label>AUD:</label>
            <input type="number"/><br/>
            <label>IRR:</label>
            <input type="number"/><br/>
            <label>USD:</label>
            <input type="number"/>
        </div>
        </div>
    )
}
export default CurrencyDisplay;