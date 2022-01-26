import { Slider } from "@material-ui/core";
import React,{useState} from "react";


export const RangeSlider = () => {
    const [val,setVal]=useState([40,100]);
    const updateVal=(item)=>{
        setVal(item)
        console.log(item)
    }
    return (
        <div>
            <div style={{width:300,margin:30}}>
                <Slider 
                    value={val}
                    max={200}
                    onChange={updateVal}/>

            </div>
        </div>
    )
}
