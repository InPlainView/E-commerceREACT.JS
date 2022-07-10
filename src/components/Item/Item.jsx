import React from 'react'
import { useNavigate } from 'react-router-dom'
// import ClickCounter from '../ClickCounter/click'
import './Item.css'

const Item = ({prod}) => {
    // const {title, image} = prod

    const navigate= useNavigate()
    const handleDetail = () => {
        console.log("navega hacia el detail")
        navigate(`/detail/${prod.id}`)
    }

return(
    <div className='cardbox' >
        <li >
            <div className='itemcard'>
                 <h3>
                 {prod.title}
                 </h3>
                 <img src={prod.image} alt=""/>
                 <div className='middle'>
                    <button className='detailBtn' onClick={handleDetail}>Detalles</button>
                 </div>
                 {/* <ClickCounter className="cardcount" initial={1} stock={20}/> */}
            </div>
        </li>
        
    </div>

)
}

export default Item