import React, { useState } from 'react'
import { useEffect } from 'react'
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
                console.log("Document data:", docSnap.data());
                const productDetail = {id: docSnap.id , ...docSnap.data()}
                setProductDetail(productDetail)
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }



            // const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
            // const data = await response.json()
            // console.log(data)
            // setProductDetail(data)
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