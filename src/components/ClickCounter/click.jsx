import React from "react";
import { useState } from 'react'
import './click.css';


function ClickCounter () {

const [count, setCount] = useState(0)

const plusCount = () => {
     setCount (count + 1)
}
const minusCount = () => {
   if (count > 0){
    setCount (count - 1) 
   } 
}
return (
    <div className="countbox">
        <button onClick={minusCount} className="plusButton">-</button>
        <div className="countNumber">{count}</div>
        <button onClick={plusCount} className="minusButton">+</button>
    </div> 
)

}
export default ClickCounter