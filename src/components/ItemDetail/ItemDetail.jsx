import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({product}) => {
    console.log(product)
  return (
    <div className='containbox'>
        <h3 className='titlebox'>{product.title}</h3>
        <img className='imgbox' src={product.image} alt=""></img>
        <div className='detailbox'>
            <p className='descriptionbox'>{product.description}</p>
            <p className='pricebox'>Price: ${product.price}</p>
        </div>
    </div>

  )
}

export default ItemDetail