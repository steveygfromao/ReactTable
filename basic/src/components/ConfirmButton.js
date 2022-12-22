import React from "react";
import {useState} from 'react';

const ConfirmButton =(props)=> {
    const rowValues = props.props.row.values; 
    const [value, setValue] = useState("");

    
    const btnClicked = async () => { console.log('Clicked'); }
        return (
            <div><button value={value} onClick={btnClicked}>Confirm</button></div>
        );
     
}

export default ConfirmButton;