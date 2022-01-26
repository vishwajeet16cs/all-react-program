import React from 'react';
import { Slider } from '@material-ui/core';

export const SliderEx = () => {

    const marks =[
        {value:0,
        label:"Start"},
        {value:200,
        label:"end"}
    ]
    const getvalue=(e,val)=>{// val the keep track of slider move 
        // only we can get value from 2nd parameter directly
        // console.log("e="+e.target.object)
     console.log(val);   
    }
    return (
        <div>
            <h1>Slider heheh</h1>
            <div style={{width:300, margin:20}}>
                <Slider color="secondary"
                        defaultValue={100}// it will keep slider at 100 (50%-200)
                        max={200}//max we can increase till 200
                        marks={marks}//it will give mark ass diff start and end --marks array
                        valueLabelDisplay="auto"// it will display mark where the slide is it will inc and decr as 
                        //we will inc and dicr the slider
                        onChange={getvalue}
                        step={10}// it will incr or dicr by 10 unit
                        // orientation="vertical"
                        // make slider in vertical direction
                        />
            </div>
                       
            
        </div>
    )
}
