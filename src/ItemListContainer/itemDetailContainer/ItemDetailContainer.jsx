import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

const [productDetail , setProductDetail] = useState({})

useEffect(() => {

    const getProductsDet = async() => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/3")
            const data = await response.json()
            console.log(data)
            setProductDetail(data)
        } catch (error) {
            console.log(error)
        }
    }
    getProductsDet()
}, [])  
return (
    <ItemDetail product={productDetail}/>
  )

}



export default ItemDetailContainer