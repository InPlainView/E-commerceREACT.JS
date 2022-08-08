import React, { useState } from 'react'
import './click.css';


function ClickCounter ({ initial, stock, onAdd }) {
const [count, setCount] = useState(initial)

const handleAdd = () =>{
if (count <= stock){
    onAdd(count);
}
}
const plusCount = () => {
    if(count < stock) {
        setCount (count + 1)
    }
}
const minusCount = () => {
   if (count > initial){
    setCount (count - 1) 
   } 
}
return (
    <div className="allbox">
        <div className="countbox">
            <button onClick={minusCount} className="plusButton">-</button>
            <div className="countNumber">{count}</div>
            <button onClick={plusCount} className="minusButton">+</button>
        </div>
        <button className="addCart" onClick={handleAdd}>Add</button>
    </div>
)

}
export default ClickCounter