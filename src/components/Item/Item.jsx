import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Item.css'

const Item = ({prod}) => {

    const navigate= useNavigate()
    const handleDetail = () => {
        navigate(`/detail/${prod.id}`)
    }

return(
    <div className='cardbox' >
        <li >
            <div className='itemcard'>
                 <h3>{prod.title}</h3>
                 <img src={prod.image} alt=""/>
                 <div className='middle'>
                    <button className='detailBtn' onClick={handleDetail}>Detalles</button>
                 </div>
            </div>
        </li>
        
    </div>

)
}

export default Item