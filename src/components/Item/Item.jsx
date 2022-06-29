import React from 'react'
import ClickCounter from '../ClickCounter/click'
import './Item.css'

const Item = ({prod}) => {
    const {id, name, image, species, status, type, url, gender , episode} = prod

return(
    <div className='cardbox'>
        <li >
            <div className='itemcard'>
                 <h3>
                 {name}
                 </h3>
                 <img src={image}/>
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