//https://mui.com/components/checkboxes/#main-content

import React,{useState} from 'react';
import {Checkbox} from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import { FavoriteBorder } from '@material-ui/icons';
const CheckBoxEx = () => {
    const [name]=useState([]);
    function getByDisplayValue(e){
        let data=name;
        data.push(e.target.value)
        console.log(e.target.value);
        console.log(data);
    }
    return (
        <div>
            <h2>Checkbox designe</h2>
            <div>
    <Checkbox color="primary"
              value="vishwajeet"
              onChange={(e)=>{getByDisplayValue(e)}}/>
    <Checkbox color="secondary"
              value="amarjeet"
              onChange={(e)=>{getByDisplayValue(e)}}/>
    <Checkbox color="primary"
              value="Anish"
              onChange={(e)=>{getByDisplayValue(e)}}/>
    <Checkbox color="secondary"
              value="love Rd"
              icon={<FavoriteBorder/>}
              checkedIcon={<Favorite/>}
              onChange={(e)=>{getByDisplayValue(e)}}/>

  
            </div>

        </div>
    )
}
export default CheckBoxEx
