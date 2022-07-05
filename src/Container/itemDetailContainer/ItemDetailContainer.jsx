import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

const [productDetail , setProductDetail] = useState({})

const params = useParams()

useEffect(() => {

    const getProductsDet = async() => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
            const data = await response.json()
            console.log(data)
            setProductDetail(data)
        } catch (error) {
            console.log(error)
        }
    }
    getProductsDet()
}, [params])  

return (
    <ItemDetail product={productDetail}/>
 
  )

}



export default ItemDetailContainer