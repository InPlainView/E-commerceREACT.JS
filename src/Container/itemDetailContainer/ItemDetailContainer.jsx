import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { doc , getDoc} from 'firebase/firestore'
import {db} from '../../firebase/config'

const ItemDetailContainer = () => {
const [productDetail , setProductDetail] = useState({})
const params = useParams()

useEffect(() => {
    const getProductsDet = async() => {
        try {
                const docRef = doc(db, "products", params.productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                const productDetail = {id: docSnap.id , ...docSnap.data()}
                setProductDetail(productDetail)
                } else {
                }
        } catch (error) {
        }
    }
    getProductsDet()
}, [params])  

return (
    <ItemDetail product={productDetail}/>
  )

}
export default ItemDetailContainer