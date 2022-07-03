import React from 'react'
import ClickCounter from '../ClickCounter/click'
import './Item.css'

const Item = ({prod}) => {
    const {title, image} = prod

return(
    <div className='cardbox'>
        <li >
            <div className='itemcard'>
                 <h2>
                 {title}
                 </h2>
                 <img src={image} alt=""/>
                 <div className='middle'>
                    <button className='detailBtn'>Detalles</button>
                 </div>
            </div>
        </li>
        <ClickCounter className="cardcount" initial={1} stock={10}/>
    </div>

)
}

export default Item