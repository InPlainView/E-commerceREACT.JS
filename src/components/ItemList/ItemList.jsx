import React from 'react'
import Item from '../Item/Item'

const ItemList = ({char}) => {
  return (
    <div className='itemList'>
        {char?.map(prod => <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList